import { Utils } from '@nativescript/core';
import { PaytmAllInOneNsCommon, PaytmOptions, PaytmResponse } from './common';
const bundleToJson = (bundle: globalAndroid.os.Bundle): PaytmResponse => {
  const JsonObject = {};
  try {
    const keys = bundle.keySet();
    const keysArr: string[] = Array.from(keys.toArray());
    keysArr.forEach((key) => {
      JsonObject[key] = org.json.JSONObject.wrap(bundle.get(key));
    });
    return JsonObject as PaytmResponse;
  } catch (error) {
    throw new Error('Error while parsing data');
  }
};

export class PaytmAllInOneNs extends PaytmAllInOneNsCommon {
  static nativeView: any;
  private static resolve: (data: PaytmResponse) => any;
  private static reject: (error: any) => any;
  private static REQUEST_CODE = 554433;

  static startTransaction(option: PaytmOptions): Promise<PaytmResponse> {
    if (!option.mid || option.mid.trim().length == 0 || !option.orderid || option.orderid.trim().length === 0 || !option.txnToken || option.txnToken.trim().length === 0 || !option.amount || option.amount.trim().length === 0 || !option.callbackurl || option.callbackurl.trim().length === 0) {
      Promise.reject(new Error('mid , orderid, txnToken, amount, callbackurl is non empty mandatory fields to start transaction'));
    }
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      const paytmOrder = new com.paytm.pgsdk.PaytmOrder(option.orderid, option.mid, option.txnToken, option.amount, option.callbackurl);
      const paytmPaymentTransactionCallback = new com.paytm.pgsdk.PaytmPaymentTransactionCallback({
        clientAuthenticationFailed: (error: string) => {
          this.reject(new Error(error));
        },
        networkNotAvailable: () => {
          this.reject(new Error('No active connection available to process transaction!'));
        },
        onBackPressedCancelTransaction: () => {
          this.reject(new Error('Trancaction canceled due to back nuton pressed.'));
        },
        onErrorLoadingWebPage: (code: number, errror: string, error2: string) => {
          this.reject(new Error('Error code ' + code + ': ' + errror, { cause: error2 }));
        },
        onErrorProceed: (error: string) => {
          this.reject(new Error(error));
        },
        onTransactionCancel: (error: string, bundle: globalAndroid.os.Bundle) => {
          if (bundle === null || bundle.isEmpty()) {
            this.reject(new Error(error));
          } else {
            console.log(bundle.toString());
            this.resolve(bundleToJson(bundle));
          }
        },
        onTransactionResponse: (data: globalAndroid.os.Bundle) => {
          console.log(data.toString());
          this.resolve(bundleToJson(data));
        },
        someUIErrorOccurred: (error: string) => {
          this.reject(new Error(error));
        },
      });

      const transactionManager = new com.paytm.pgsdk.TransactionManager(paytmOrder, paytmPaymentTransactionCallback);
      transactionManager.setAppInvokeEnabled(option.enableAppInvoke);
      if (option.isStagging) {
        transactionManager.setShowPaymentUrl('https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage');
      } else {
        transactionManager.setShowPaymentUrl('https://securegw.paytm.in/theia/api/v1/showPaymentPage');
      }
      transactionManager.startTransaction(Utils.android.getCurrentActivity(), PaytmAllInOneNs.REQUEST_CODE);
      Utils.android.getCurrentActivity().onActivityResult = (requestCode: number, resultCode: number, data: android.content.Intent) => {
        if (requestCode == PaytmAllInOneNs.REQUEST_CODE) {
          if (data != null) {
            const nativeSdkForMerchantMessage = data.getStringExtra('nativeSdkForMerchantMessage');
            console.log(nativeSdkForMerchantMessage);
            const response = data.getStringExtra('response');
            if (response?.trim().length > 0) {
              try {
                console.log(response);
                const responseJson: PaytmResponse = JSON.parse(response);
                this.resolve(responseJson);
              } catch (e) {
                this.reject(new Error('Error while parsing data'));
              }
            } else if (nativeSdkForMerchantMessage?.trim().length > 0) {
              this.reject(new Error(nativeSdkForMerchantMessage));
            } else {
              this.reject(new Error('something went wrong'));
            }
          } else {
            this.reject(new Error('something went wrong! no data available.'));
          }
        }
      };
    });
  }
}
