import { RazorpayNsCommon } from './common';
import { IPaymenrResponse, IRazorPayOptions } from '@yogi/razorpay-ns/index';
import { AndroidApplication, Frame, Application, Utils, setActivityCallbacks, AndroidActivityCallbacks } from '@nativescript/core';

export class RazorpayNs extends RazorpayNsCommon {
  static nativeView: com.razorpay.Checkout = new com.razorpay.Checkout();
  static reject: (error: any) => any;
  static resolve: (response: IPaymenrResponse) => any;
  static open(options: IRazorPayOptions): Promise<IPaymenrResponse> {
    return new Promise<IPaymenrResponse>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      const activity = Utils.android.getCurrentActivity();
      const key = options.key;
      delete options.key;
      const optionStr: string = JSON.stringify(options);
      com.razorpay.Checkout.clearUserData(activity);
      com.razorpay.Checkout.handleActivityResult = (_activity, _num1, _num2, _intent, _listener, _wallatListener) => {
        debugger;
      };
      this.nativeView.setKeyID(key);
      com.razorpay.Checkout.preload(activity);
      this.nativeView.open(activity, new org.json.JSONObject(optionStr));
    });
  }
}
