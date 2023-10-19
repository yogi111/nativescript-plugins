import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { PaytmAllInOneNsComponent } from './paytm-all-in-one-ns.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: PaytmAllInOneNsComponent }])],
  declarations: [PaytmAllInOneNsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PaytmAllInOneNsModule {}
