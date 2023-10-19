interface AIDelegate extends NSObjectProtocol {
  didFinishWithResponse(status: AIPaymentStatus, response: NSDictionary<string, any>): void;

  openPaymentWebVC(controller: UIViewController): void;
}
declare var AIDelegate: {
  prototype: AIDelegate;
};

declare const enum AIEnvironment {
  Production = 0,

  Staging = 1,
}

declare class AIHandler extends NSObject implements UIAdaptivePresentationControllerDelegate {
  static alloc(): AIHandler; // inherited from NSObject

  static new(): AIHandler; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  adaptivePresentationStyleForPresentationController(controller: UIPresentationController): UIModalPresentationStyle;

  adaptivePresentationStyleForPresentationControllerTraitCollection(controller: UIPresentationController, traitCollection: UITraitCollection): UIModalPresentationStyle;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  isUserLoggedIn(merchantId: string, urlScheme: string): void;

  openPaytmSubscription(merchantId: string, orderId: string, txnToken: string, amount: string, callbackUrl: string, delegate: AIDelegate, environment: AIEnvironment, mobileHash: string, isMobileVerificationRequired: string, urlScheme: string): void;

  openPaytmWithMerchantIdOrderIdTxnTokenAmountCallbackUrlDelegateEnvironmentMobileHashIsMobileVerificationRequiredUrlScheme(merchantId: string, orderId: string, txnToken: string, amount: string, callbackUrl: string, delegate: AIDelegate, environment: AIEnvironment, mobileHash: string, isMobileVerificationRequired: string, urlScheme: string): void;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  presentationControllerDidAttemptToDismiss(presentationController: UIPresentationController): void;

  presentationControllerDidDismiss(presentationController: UIPresentationController): void;

  presentationControllerPrepareAdaptivePresentationController(presentationController: UIPresentationController, adaptivePresentationController: UIPresentationController): void;

  presentationControllerShouldDismiss(presentationController: UIPresentationController): boolean;

  presentationControllerViewControllerForAdaptivePresentationStyle(controller: UIPresentationController, style: UIModalPresentationStyle): UIViewController;

  presentationControllerWillDismiss(presentationController: UIPresentationController): void;

  presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator(presentationController: UIPresentationController, style: UIModalPresentationStyle, transitionCoordinator: UIViewControllerTransitionCoordinator): void;

  respondsToSelector(aSelector: string): boolean;

  restrictAppInvokeFlowWithRestrict(restrict_: boolean): void;

  retainCount(): number;

  self(): this;

  setBridgeNameWithName(name: string): void;
}

declare const enum AIPaymentStatus {
  Success = 0,

  Failed = 1,

  Pending = 2,

  Cancel = 3,
}

declare var AppInvokeSDKVersionNumber: number;

declare var AppInvokeSDKVersionString: interop.Reference<number>;
