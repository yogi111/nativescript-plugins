interface ExternalWalletSelectionProtocol {
  onExternalWalletSelectedWithPaymentData(walletName: string, paymentData: NSDictionary<any, any>): void;
}
declare var ExternalWalletSelectionProtocol: {
  prototype: ExternalWalletSelectionProtocol;
};

declare class Otpelf extends NSObject {
  static alloc(): Otpelf; // inherited from NSObject

  static getSharedInstance(): Otpelf;

  static initWithWebViewAndMerchantKey(webView: WKWebView, merchantKey: string): void;

  static new(): Otpelf; // inherited from NSObject

  close(): void;

  setPaymentData(data: NSDictionary<any, any>): void;

  webViewWithDidFinishError(navigation: WKNavigation): boolean;
}

interface PluginPaymentDelegate {
  canProcessPaymentWithModel(model: PluginPaymentModel): boolean;

  identifier(): string;

  payWithModel(model: PluginPaymentModel): void;
}
declare var PluginPaymentDelegate: {
  prototype: PluginPaymentDelegate;
};

declare class PluginPaymentModel extends NSObject {
  static alloc(): PluginPaymentModel; // inherited from NSObject

  static new(): PluginPaymentModel; // inherited from NSObject
}

declare class RazorpayCheckout extends NSObject {
  static alloc(): RazorpayCheckout; // inherited from NSObject

  static initWithKeyAndDelegate(key: string, delegate: RazorpayProtocol): RazorpayCheckout;

  static initWithKeyAndDelegateWithData(key: string, delegate: RazorpayPaymentCompletionProtocolWithData): RazorpayCheckout;

  static new(): RazorpayCheckout; // inherited from NSObject

  static publishUriWith(data: string): void;

  clearUserData(): void;

  close(): void;

  open(options: NSDictionary<any, any>): void;

  openArrExternalPaymentEntities(options: NSDictionary<any, any>, arrExternalPaymentEntities: NSArray<PluginPaymentDelegate> | PluginPaymentDelegate[]): void;

  openDisplayController(options: NSDictionary<any, any>, displayController: UIViewController): void;

  openDisplayControllerArrExternalPaymentEntities(options: NSDictionary<any, any>, displayController: UIViewController, arrExternalPaymentEntities: NSArray<PluginPaymentDelegate> | PluginPaymentDelegate[]): void;

  setExternalWalletSelectionDelegate(walletDelegate: ExternalWalletSelectionProtocol): void;
}

interface RazorpayPaymentCompletionProtocol extends RazorpayProtocol {
  onPaymentErrorDescription(code: number, str: string): void;

  onPaymentSuccess(payment_id: string): void;
}
declare var RazorpayPaymentCompletionProtocol: {
  prototype: RazorpayPaymentCompletionProtocol;
};

interface RazorpayPaymentCompletionProtocolWithData extends RazorpayProtocol {
  onPaymentErrorDescriptionAndData(code: number, str: string, response: NSDictionary<any, any>): void;

  onPaymentSuccessAndData(payment_id: string, response: NSDictionary<any, any>): void;
}
declare var RazorpayPaymentCompletionProtocolWithData: {
  prototype: RazorpayPaymentCompletionProtocolWithData;
};

interface RazorpayProtocol {}
declare var RazorpayProtocol: {
  prototype: RazorpayProtocol;
};

interface RazorpayResultProtocol extends RazorpayProtocol {
  onCompleteWithResponse(response: NSDictionary<any, any>): void;
}
declare var RazorpayResultProtocol: {
  prototype: RazorpayResultProtocol;
};
