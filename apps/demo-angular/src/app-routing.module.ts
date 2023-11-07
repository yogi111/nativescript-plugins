import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'google-place-ns', loadChildren: () => import('./plugin-demos/google-place-ns.module').then((m) => m.GooglePlaceNsModule) },
  { path: 'paytm-all-in-one-ns', loadChildren: () => import('./plugin-demos/paytm-all-in-one-ns.module').then((m) => m.PaytmAllInOneNsModule) },
  { path: 'razorpay-ns', loadChildren: () => import('./plugin-demos/razorpay-ns.module').then((m) => m.RazorpayNsModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
