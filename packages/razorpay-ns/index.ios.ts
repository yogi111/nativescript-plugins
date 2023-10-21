import { IPaymenrResponse, IRazorPayOptions, RazorpayNsCommon } from './common';

// @ts-ignore
const RazorpayPaymentCompletionProtocolWithDataImp = UIResponder.extend(
  {
    onPaymentErrorDescriptionAndData: (code: number, str: string, response: NSDictionary<any, any>) => {
      // @ts-ignore
      console.log(code, str);
      RazorpayNs.reject({
        code,
        str,
      });
    },
    onPaymentSuccessAndData: (payment_id: string, response: NSDictionary<any, any>) => {
      // @ts-ignore
      RazorpayNs.resolve({
        razorpay_payment_id: payment_id,
        razorpay_order_id: response.valueForKey('razorpay_order_id'),
        razorpay_signature: response.valueForKey('razorpay_signature'),
      });
    },
  },
  {
    name: 'RazorpayPaymentCompletionProtocolWithDataImp',
    protocols: [RazorpayPaymentCompletionProtocolWithData],
  }
);
export class RazorpayNs extends RazorpayNsCommon {
  static nativeView: RazorpayCheckout;
  static resolve = (data: IPaymenrResponse) => {};
  static reject = (e: any) => {};
  static open(option: IRazorPayOptions): Promise<IPaymenrResponse> {
    return new Promise<IPaymenrResponse>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
      this.nativeView = RazorpayCheckout.initWithKeyAndDelegateWithData(option.key, RazorpayPaymentCompletionProtocolWithDataImp.new());
      delete option.key;
      // @ts-ignore
      this.nativeView.open(new NSDictionary(Object.values(option), Object.keys(option)));
    });
  }
}
