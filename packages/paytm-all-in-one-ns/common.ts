export interface PaytmResponse {
  STATUS: 'TXN_SUCCESS' | 'TXN_FAILURE' | 'PENDING';
  ORDERID: string;
  CHARGEAMOUNT: string;
  TXNAMOUNT: string;
  TXNDATE: string;
  MID: string;
  TXNID: string;
  RESPCODE: string;
  PAYMENTMODE: 'PPI' | 'UPI' | 'CC' | 'DC' | 'NB';
  BANKTXNID: string;
  CURRENCY: string;
  GATEWAYNAME: string;
  RESPMSG: string;
}

export interface PaytmOptions {
  orderid: string;
  mid: string;
  txnToken: string;
  amount: string;
  callbackurl: string;
  isStagging: boolean;
  enableAppInvoke: boolean;
  iosScheme?: string;
}

export class PaytmAllInOneNsCommon {
  nativeView: any;
  startTransaction(option: PaytmOptions): Promise<PaytmResponse> {
    return Promise.resolve(null);
  }
}
