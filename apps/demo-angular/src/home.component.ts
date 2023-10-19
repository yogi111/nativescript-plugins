import { Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
    {
      name: 'paytm-all-in-one-ns',
    },
    {
      name: 'razorpay-ns',
    },
  ];
}
