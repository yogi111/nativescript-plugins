import { Application } from '@nativescript/core';
import { PaytmAllInOneNsCommon, PaytmOptions, PaytmResponse } from './common';

@NativeClass()
export class PaytmAllInOneNsDelegateImp extends NSObject implements AIDelegate {
  static ObjCProtocols = [AIDelegate];
  owner: WeakRef<PaytmAllInOneNs>;
  static initWithOwner(owner: WeakRef<PaytmAllInOneNs>) {
    const delegate = <PaytmAllInOneNsDelegateImp>PaytmAllInOneNsDelegateImp.new();
    delegate.owner = owner;
    return delegate;
  }

  didFinishWithResponse(status: AIPaymentStatus, response: NSDictionary<string, any>): void {
    const responseJson = {};
    const data: string[] = Array.from(response.allKeys);
    if (data.length === 1 && data[0] === 'response') {
      this.owner.get().reject(new Error(response.valueForKey('response')));
    } else {
      data.forEach((key) => {
        responseJson[key] = response.valueForKey(key);
      });
      this.owner.get().resolve(responseJson as PaytmResponse);
    }
  }
  openPaymentWebVC(controller: UIViewController): void {
    controller.modalPresentationStyle = UIModalPresentationStyle.Automatic;
    Application.ios.rootController.presentViewControllerAnimatedCompletion(controller, true, null);
  }
}
export class PaytmAllInOneNs extends PaytmAllInOneNsCommon {
  nativeView: AIHandler;
  resolve: (data: PaytmResponse) => any;
  reject: (error: any) => any;

  startTransaction(option: PaytmOptions): Promise<PaytmResponse> {
    if (!option.mid || option.mid.trim().length == 0 || !option.orderid || option.orderid.trim().length === 0 || !option.txnToken || option.txnToken.trim().length === 0 || !option.amount || option.amount.trim().length === 0 || !option.callbackurl || option.callbackurl.trim().length === 0) {
      Promise.reject(new Error('mid , orderid, txnToken, amount, callbackurl is non empty mandatory fields to start transaction'));
    }
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      //@ts-ignore
      this.nativeView = AIHandler.alloc().init();
      const delegate = PaytmAllInOneNsDelegateImp.initWithOwner(new WeakRef(this));
      this.nativeView.restrictAppInvokeFlowWithRestrict(!option.enableAppInvoke);
      this.nativeView.openPaytmWithMerchantIdOrderIdTxnTokenAmountCallbackUrlDelegateEnvironmentMobileHashIsMobileVerificationRequiredUrlScheme(option.mid, option.orderid, option.txnToken, option.amount, option.callbackurl, delegate, option.isStagging ? AIEnvironment.Staging : AIEnvironment.Production, '', 'false', option.iosScheme);
    });
  }
}
