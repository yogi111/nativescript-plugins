/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module razorpay {
    export class Checkout {
      public static class: java.lang.Class<com.razorpay.Checkout>;
      public static NETWORK_ERROR: number;
      public static INVALID_OPTIONS: number;
      public static PAYMENT_CANCELED: number;
      public static TLS_ERROR: number;
      public static INCOMPATIBLE_PLUGIN: number;
      public static RZP_REQUEST_CODE: number;
      public open(param0: globalAndroid.app.Activity, param1: org.json.JSONObject): void;
      public onError(param0: number, param1: string): void;
      public static sdkCheckIntegration(param0: globalAndroid.app.Activity): void;
      public onCreate(param0: globalAndroid.os.Bundle): void;
      public builderTest(): string;
      public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
      public constructor();
      public setPublicKey(param0: string): void;
      public static preload(param0: globalAndroid.content.Context): void;
      public setImage(param0: number): void;
      public static handleActivityResult(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.Intent, param4: com.razorpay.PaymentResultWithDataListener, param5: com.razorpay.ExternalWalletListener): void;
      public setFullScreenDisable(param0: boolean): void;
      public setKeyID(param0: string): void;
      public onSuccess(param0: string): void;
      public static clearUserData(param0: globalAndroid.content.Context): void;
      public merchantActivityResult(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.Intent, param4: com.razorpay.PaymentResultWithDataListener, param5: com.razorpay.ExternalWalletListener): void;
      public merchantActivityResult(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.Intent, param4: com.razorpay.PaymentResultListener, param5: com.razorpay.ExternalWalletListener): void;
    }

    export class PaymentResultWithDataListener {
      public static class: java.lang.Class<com.razorpay.PaymentResultWithDataListener>;
      /**
       * Constructs a new instance of the com.razorpay.PaymentResultWithDataListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { onPaymentSuccess(param0: string, param1: com.razorpay.PaymentData): void; onPaymentError(param0: number, param1: string, param2: com.razorpay.PaymentData): void });
      public constructor();
      public onPaymentSuccess(param0: string, param1: com.razorpay.PaymentData): void;
      public onPaymentError(param0: number, param1: string, param2: com.razorpay.PaymentData): void;
    }
    export class PaymentData {
      public static class: java.lang.Class<com.razorpay.PaymentData>;
      public getUserEmail(): string;
      public getOrderId(): string;
      public getSignature(): string;
      public constructor();
      public getPaymentId(): string;
      public getData(): org.json.JSONObject;
      public getUserContact(): string;
      public getExternalWallet(): string;
    }
    export class ExternalWalletListener {
      public static class: java.lang.Class<com.razorpay.ExternalWalletListener>;
      /**
       * Constructs a new instance of the com.razorpay.ExternalWalletListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: { onExternalWalletSelected(param0: string, param1: com.razorpay.PaymentData): void });
      public constructor();
      public onExternalWalletSelected(param0: string, param1: com.razorpay.PaymentData): void;
    }

    export class CheckoutActivity {
      public static class: java.lang.Class<com.razorpay.CheckoutActivity>;
      public clearWebViewHistory(param0: number): void;
      public loadDataWithBaseURL(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string): void;
      public onCreate(param0: globalAndroid.os.Bundle): void;
      public isWebViewVisible(param0: number): boolean;
      public constructor();
      public hideProgressBar(): void;
      public loadData(param0: number, param1: string, param2: string, param3: string): void;
      public getWebView(param0: number): globalAndroid.webkit.WebView;
      public setSmsPermission(param0: boolean): void;
      public makeWebViewVisible(param0: number): void;
      public destroy(param0: number, param1: string): void;
      public showProgressBar(param0: number): void;
      public showToast(param0: string, param1: number): void;
      public addJavascriptInterfaceToPrimaryWebview(param0: any, param1: string): void;
      public checkSmsPermission(): void;
      public loadUrl(param0: number, param1: string): void;
      public postSms(param0: string, param1: string): void;
    }
  }
}
