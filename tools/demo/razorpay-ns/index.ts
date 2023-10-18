import { DemoSharedBase } from '../utils';
import { RazorpayNs } from '@yogi/razorpay-ns';

export class DemoSharedRazorpayNs extends DemoSharedBase {
  testIt() {
    let options = {
      description: 'Credits towards consultation',
      currency: 'INR',
      key: 'rzp_test_72ipGop6UjXn0r',
      amount: 100,
      name: 'Hypolocal',
      order_id: '', //Replace this with an order_id created using Orders API.
      theme: {
        color: '#203ecc',
      },
      image: 'https://hypolocal.com/assets/icons/icon-192x192.png',
    };
    RazorpayNs.open(options)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log('test razorpay-ns!');
  }
}
