import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { RazorpayNsComponent } from './razorpay-ns.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: RazorpayNsComponent }])],
  declarations: [RazorpayNsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RazorpayNsModule {}
