import { Frame, Application, setActivityCallbacks, AndroidActivityCallbacks } from '@nativescript/core';
import { RazorpayNs } from '@yogi/razorpay-ns';

@NativeClass()
@Interfaces([com.razorpay.PaymentResultWithDataListener])
@JavaProxy('org.nativescript.plugindemo.PaymentActivity')
export class PaymentActivity extends android.app.Activity implements com.razorpay.PaymentResultWithDataListener {
  public isNativeScriptActivity;

  private _callbacks: AndroidActivityCallbacks;

  public override onCreate(savedInstanceState: android.os.Bundle): void {
    super.onCreate(savedInstanceState);
    Application.android.init(this.getApplication());
    // com.razorpay.Checkout.preload(this.getApplication().getApplicationContext());
    // Set the isNativeScriptActivity in onCreate (as done in the original NativeScript activity code)
    // The JS constructor might not be called because the activity is created from Android.
    this.isNativeScriptActivity = true;
    if (!this._callbacks) {
      setActivityCallbacks(this);
    }

    this._callbacks.onCreate(this, savedInstanceState, this.getIntent(), super.onCreate);
  }

  public onNewIntent(intent: android.content.Intent): void {
    this._callbacks.onNewIntent(this, intent, super.setIntent, super.onNewIntent);
  }

  public onSaveInstanceState(outState: android.os.Bundle): void {
    this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
  }

  public onStart(): void {
    this._callbacks.onStart(this, super.onStart);
  }

  public onStop(): void {
    this._callbacks.onStop(this, super.onStop);
  }

  public onDestroy(): void {
    this._callbacks.onDestroy(this, super.onDestroy);
  }

  public onPostResume(): void {
    this._callbacks.onPostResume(this, super.onPostResume);
  }

  public onBackPressed(): void {
    this._callbacks.onBackPressed(this, super.onBackPressed);
  }

  public onRequestPermissionsResult(requestCode: number, permissions: Array<string>, grantResults: Array<number>): void {
    this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
  }

  public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
    this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);
  }

  public onPaymentSuccess(param0: string, param1: com.razorpay.PaymentData): void {
    RazorpayNs.resolve({
      razorpay_payment_id: param0,
      razorpay_order_id: param1.getOrderId(),
      razorpay_signature: param1.getSignature(),
    });
  }
  public onPaymentError(param0: number, param1: string, param2: com.razorpay.PaymentData): void {
    RazorpayNs.reject({
      code: param0,
      error: param1,
    });
  }
}
