import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { GooglePlaceNsComponent } from './google-place-ns.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: GooglePlaceNsComponent }])],
  declarations: [GooglePlaceNsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class GooglePlaceNsModule {}
