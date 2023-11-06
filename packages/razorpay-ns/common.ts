export interface IRazorPayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  image?: string;
  order_id: string;
  prefill?: {
    contact?: string;
    email?: string;
    name?: string;
  };
  notes?: { [key: string]: string };
  theme?: {
    hide_topbar?: boolean;
    color?: string;
    backdrop_color?: string;
  };
  modal?: {
    backdropclose?: boolean;
    escape?: boolean;
    handleback?: boolean;
    confirm_close?: boolean;
    ondismiss?: () => any;
    animation?: boolean;
  };
  subscription_id?: string;
  subscription_card_change?: boolean;
  recurring?: boolean;
  callback_url?: string;
  redirect?: boolean;
  customer_id?: string;
  remember_customer?: boolean;
  timeout?: number;
  readonly?: {
    contact?: boolean;
    email?: boolean;
    name?: boolean;
  };
  hidden?: {
    contact?: boolean;
    email?: boolean;
  };
  send_sms_hash?: boolean;
  allow_rotation?: boolean;
  retry?: {
    enabled?: boolean;
    max_count?: number;
  };
  config?: {
    display?: {
      language?: string;
    };
  };
}

export interface IPaymenrResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}
export class RazorpayNsCommon {
  nativeView: any;
  reject: (error: any) => void;
  resolve: (response: IPaymenrResponse) => void;

  open(options: IRazorPayOptions, successCallback: (data: IPaymenrResponse) => void, failuerCallback: (error: any) => void): Promise<IPaymenrResponse> {
    return Promise.resolve(null);
  }
}
