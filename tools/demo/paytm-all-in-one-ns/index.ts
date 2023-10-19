import { DemoSharedBase } from '../utils';
import { PaytmAllInOneNs, PaytmOptions } from '@yogi/paytm-all-in-one-ns';

export class DemoSharedPaytmAllInOneNs extends DemoSharedBase {
  testIt() {
    console.log('test paytm-all-in-one-ns!');
    const options: PaytmOptions = {
      mid: '',
      amount: '',
      orderid: '',
      txnToken: '',
      callbackurl: '',
      enableAppInvoke: false,
      isStagging: false,
    };
    PaytmAllInOneNs.startTransaction(options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
