import { IPaymenrResponse, IRazorPayOptions } from '@yogi/razorpay-ns/index';

export class RazorpayNsCommon {
  static nativeView: any;
  static reject: (error: any) => void;
  static resolve: (response: IPaymenrResponse) => void;

  static open(options: IRazorPayOptions): Promise<IPaymenrResponse> {
    return Promise.resolve(null);
  }
}
