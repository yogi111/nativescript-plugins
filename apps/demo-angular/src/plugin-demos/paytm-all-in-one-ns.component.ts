import { Component, NgZone } from '@angular/core';
import { DemoSharedPaytmAllInOneNs } from '@demo/shared';
import {} from '@yogi/paytm-all-in-one-ns';

@Component({
  selector: 'demo-paytm-all-in-one-ns',
  templateUrl: 'paytm-all-in-one-ns.component.html',
})
export class PaytmAllInOneNsComponent {
  demoShared: DemoSharedPaytmAllInOneNs;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedPaytmAllInOneNs();
  }
}
