import { Component, NgZone } from '@angular/core';
import { DemoSharedRazorpayNs } from '@demo/shared';
import {} from '@yogi/razorpay-ns';

@Component({
  selector: 'demo-razorpay-ns',
  templateUrl: 'razorpay-ns.component.html',
})
export class RazorpayNsComponent {
  demoShared: DemoSharedRazorpayNs;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedRazorpayNs();
  }
}
