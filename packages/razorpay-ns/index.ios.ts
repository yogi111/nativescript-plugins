import { Application } from '@nativescript/core';
import { IPaymenrResponse, IRazorPayOptions, RazorpayNsCommon } from './common';

@NativeClass()
export class RazorpayPaymentCompletionProtocolWithDataImp extends UIResponder implements RazorpayPaymentCompletionProtocolWithData {
  static ObjCProtocols = [RazorpayPaymentCompletionProtocolWithData];
  owner: WeakRef<RazorpayNs>;
  static initWithOwner(ref: WeakRef<RazorpayNs>) {
    const delegate = <RazorpayPaymentCompletionProtocolWithDataImp>RazorpayPaymentCompletionProtocolWithDataImp.new();
    delegate.owner = ref;
    return delegate;
  }
  onPaymentSuccessAndData(payment_id: string, response: NSDictionary<any, any>): void {
    this.owner.get().resolve({
      razorpay_payment_id: payment_id,
      razorpay_order_id: response.valueForKey('razorpay_order_id'),
      razorpay_signature: response.valueForKey('razorpay_signature'),
    });
    this.owner.get().successCallback({
      razorpay_payment_id: payment_id,
      razorpay_order_id: response.valueForKey('razorpay_order_id'),
      razorpay_signature: response.valueForKey('razorpay_signature'),
    });
  }

  onPaymentErrorDescriptionAndData(code: number, str: string, response: NSDictionary<any, any>): void {
    this.owner.get().reject({ code, str });
    this.owner.get().failuerCallback({
      code,
      str,
    });
  }
}
export class RazorpayNs extends RazorpayNsCommon {
  nativeView: RazorpayCheckout;
  resolve = (data: IPaymenrResponse) => {};
  reject = (e: any) => {};
  successCallback: (data: IPaymenrResponse) => void;
  failuerCallback: (error: any) => void;
  open(option: IRazorPayOptions, successCallback: (data: IPaymenrResponse) => void, failuerCallback: (error: any) => void): Promise<IPaymenrResponse> {
    this.successCallback = successCallback;
    this.failuerCallback = failuerCallback;
    return new Promise<IPaymenrResponse>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      this.nativeView = RazorpayCheckout.initWithKeyAndDelegateWithData(option.key, RazorpayPaymentCompletionProtocolWithDataImp.initWithOwner(new WeakRef(this)));
      delete option.key;
      // @ts-ignore
      this.nativeView.openDisplayController(new NSDictionary(Object.values(option), Object.keys(option)), Application.ios.rootController);
    });
  }
}
