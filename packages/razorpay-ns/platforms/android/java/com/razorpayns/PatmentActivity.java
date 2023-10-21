package com.razorpayns;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;

import com.razorpay.Checkout;
import com.razorpay.PaymentData;
import com.razorpay.PaymentResultWithDataListener;

import org.json.JSONException;
import org.json.JSONObject;

public class PatmentActivity extends Activity implements PaymentResultWithDataListener {
  String TAG = this.getClass().getName();

  @Override
  public PackageManager getPackageManager() {
    return super.getPackageManager();
  }

  @Override
  public void onPaymentSuccess(String param0, PaymentData param1) {
    JSONObject data = new JSONObject();
    try {
      data.put("razorpay_payment_id", param0);
      data.put("razorpay_order_id", param1.getOrderId());
      data.put("razorpay_signature", param1.getSignature());
      Intent intent = new Intent();
      intent.putExtra("response", data.toString());
      setResult(RESULT_OK, intent);
      finish();
    } catch (JSONException e) {
      Intent intent = new Intent();
      intent.putExtra("error", "Error while parsing response!");
      setResult(RESULT_CANCELED, intent);
      finish();
    }
  }

  @Override
  public void onPaymentError(int param0, String param1, PaymentData param2) {
    try {
      JSONObject data = new JSONObject();
      data.put("error", param1);
      data.put("errorcode", param0);
      Intent intent = new Intent();
      intent.putExtra("error", param1);
      intent.putExtra("errorcode", param0);
      setResult(RESULT_CANCELED, intent);
      finish();
    } catch (JSONException e) {
      Intent intent = new Intent();
      intent.putExtra("error", "Error while parsing response!");
      setResult(RESULT_CANCELED, intent);
      finish();
    }
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Checkout.preload(getApplicationContext());
    Intent intent = getIntent();
    String key = intent.getStringExtra("key");
    String optionsStr = intent.getStringExtra("options");
    try {
      Log.e(TAG, optionsStr);
      Log.e(TAG, key);
      JSONObject option = new JSONObject(optionsStr);
      Checkout checkout = new Checkout();
      checkout.setKeyID(key);
      checkout.open(this, option);
    } catch (Exception error) {
      Intent intent2 = new Intent();
      intent2.putExtra("error", "Error while parsing option!");
      setResult(RESULT_CANCELED, intent2);
      finish();
    }
  }
}
