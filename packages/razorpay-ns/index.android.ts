import { Utils } from '@nativescript/core';
import { IPaymenrResponse, IRazorPayOptions, RazorpayNsCommon } from './common';

export class RazorpayNs extends RazorpayNsCommon {
  nativeView: com.razorpay.Checkout = new com.razorpay.Checkout();
  static REQUEST_CODE = 444333;
  reject: (error: any) => any;
  resolve: (response: IPaymenrResponse) => any;
  open(options: IRazorPayOptions, successCallback: (data: IPaymenrResponse) => void, failuerCallback: (error: any) => void): Promise<IPaymenrResponse> {
    return new Promise<IPaymenrResponse>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      const activity = <android.app.Activity>Utils.android.getCurrentActivity();
      const key = options.key;
      delete options.key;
      const optionsStr = JSON.stringify(options);
      //@ts-ignore
      const intent = new android.content.Intent(activity, com.razorpayns.PatmentActivity.class);
      intent.putExtra('key', key);
      intent.putExtra('options', optionsStr);
      activity.startActivityForResult(intent, RazorpayNs.REQUEST_CODE);
      activity.onActivityResult = (requestcode, resultcode, intent) => {
        if (requestcode === RazorpayNs.REQUEST_CODE) {
          if (resultcode === android.app.Activity.RESULT_OK) {
            const data = intent.getStringExtra('response');
            const response = JSON.parse(data);
            this.resolve(response);
            successCallback(response);
          } else if (resultcode === android.app.Activity.RESULT_CANCELED) {
            const error = intent.getStringExtra('error');
            const errorcode = intent.getStringExtra('errorcode');
            this.reject({ error, errorcode });
            failuerCallback({ error, errorcode });
          }
        }
      };
    });
  }
}
