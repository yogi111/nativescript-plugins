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

  export module paytm {
    export class PaytmOrder {
      public static class: java.lang.Class<com.paytm.pgsdk.PaytmOrder>;
      public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
      public constructor(param0: java.util.HashMap<string, string>);
    }
    export module pgsdk {
      export class PaytmPaymentTransactionCallback {
        public static class: java.lang.Class<com.paytm.pgsdk.PaytmPaymentTransactionCallback>;
        /**
         * Constructs a new instance of the com.paytm.pgsdk.PaytmPaymentTransactionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: { onTransactionResponse(param0: globalAndroid.os.Bundle): void; networkNotAvailable(): void; onErrorProceed(param0: string): void; clientAuthenticationFailed(param0: string): void; someUIErrorOccurred(param0: string): void; onErrorLoadingWebPage(param0: number, param1: string, param2: string): void; onBackPressedCancelTransaction(): void; onTransactionCancel(param0: string, param1: globalAndroid.os.Bundle): void });
        public constructor();
        public networkNotAvailable(): void;
        public onTransactionCancel(param0: string, param1: globalAndroid.os.Bundle): void;
        public onErrorProceed(param0: string): void;
        public someUIErrorOccurred(param0: string): void;
        public onTransactionResponse(param0: globalAndroid.os.Bundle): void;
        public onBackPressedCancelTransaction(): void;
        public clientAuthenticationFailed(param0: string): void;
        public onErrorLoadingWebPage(param0: number, param1: string, param2: string): void;
      }
      export class PaytmOrder {
        public static class: java.lang.Class<com.paytm.pgsdk.PaytmOrder>;
        public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
        public constructor(param0: java.util.HashMap<string, string>);
      }
      export class TransactionManager {
        public static class: java.lang.Class<com.paytm.pgsdk.TransactionManager>;
        public startTransaction(param0: globalAndroid.app.Activity, param1: number): void;
        public startTransactionForONUS(param0: globalAndroid.app.Activity, param1: number): void;
        public constructor(param0: com.paytm.pgsdk.PaytmOrder, param1: com.paytm.pgsdk.PaytmPaymentTransactionCallback);
        public startTransactionAfterCheckingLoginStatus(param0: globalAndroid.app.Activity, param1: string, param2: number): void;
        public setEmiSubventionEnabled(param0: boolean): void;
        public startTransaction(param0: globalAndroid.app.Activity, param1: number, param2: string): void;
        public constructor();
        public setAIOFlavour(param0: com.paytm.pgsdk.TransactionManager.Flavour): void;
        public setShowPaymentUrl(param0: string): void;
        public setCallingBridge(param0: string): void;
        public setAppInvokeEnabled(param0: boolean): void;
        public startTransaction(param0: globalAndroid.app.Activity, param1: boolean, param2: string, param3: string, param4: number): void;
        public setEnableAssist(param0: boolean): void;
        public setPcfMerchant(param0: boolean): void;
        public getCallingBridge(): string;
        public setSubscriptionFlow(param0: boolean): void;
        public setRedirectionEnabled(param0: boolean): void;
      }
      export module TransactionManager {
        export class Flavour {
          public static class: java.lang.Class<com.paytm.pgsdk.TransactionManager.Flavour>;
          public static ROUTER: com.paytm.pgsdk.TransactionManager.Flavour;
          public static DEFAULT: com.paytm.pgsdk.TransactionManager.Flavour;
          public static values(): androidNative.Array<com.paytm.pgsdk.TransactionManager.Flavour>;
          public static valueOf(param0: string): com.paytm.pgsdk.TransactionManager.Flavour;
        }
      }
    }
  }
}
