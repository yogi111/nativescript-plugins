import { Component, NgZone } from '@angular/core';
import { DemoSharedGooglePlaceNs } from '@demo/shared';
import {} from '@yogi/google-place-ns';

@Component({
  selector: 'demo-google-place-ns',
  templateUrl: 'google-place-ns.component.html',
})
export class GooglePlaceNsComponent {
  demoShared: DemoSharedGooglePlaceNs;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedGooglePlaceNs();
  }
}
