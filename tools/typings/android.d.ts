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

/// <reference path="android-declarations.d.ts"/>

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export class Places {
              public static class: java.lang.Class<com.google.android.libraries.places.api.Places>;
              public static initialize(param0: globalAndroid.content.Context, param1: string): void;
              public static createClient(param0: globalAndroid.content.Context): com.google.android.libraries.places.api.net.PlacesClient;
              public static isInitialized(): boolean;
              public static deinitialize(): void;
              public static initialize(param0: globalAndroid.content.Context, param1: string, param2: java.util.Locale): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class AddressComponent {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.AddressComponent>;
                public getShortName(): string;
                public static builder(param0: string, param1: java.util.List<string>): com.google.android.libraries.places.api.model.AddressComponent.Builder;
                public getName(): string;
                public getTypes(): java.util.List<string>;
                public constructor();
              }
              export module AddressComponent {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.AddressComponent.Builder>;
                  public build(): com.google.android.libraries.places.api.model.AddressComponent;
                  public constructor();
                  public getShortName(): string;
                  public setShortName(param0: string): com.google.android.libraries.places.api.model.AddressComponent.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class AddressComponents {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.AddressComponents>;
                public asList(): java.util.List<com.google.android.libraries.places.api.model.AddressComponent>;
                public static newInstance(param0: java.util.List<com.google.android.libraries.places.api.model.AddressComponent>): com.google.android.libraries.places.api.model.AddressComponents;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class AutocompletePrediction {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.AutocompletePrediction>;
                public getSecondaryText(param0: globalAndroid.text.style.CharacterStyle): globalAndroid.text.SpannableString;
                public static builder(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                public getPlaceTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
                public getDistanceMeters(): java.lang.Integer;
                public constructor();
                public getFullText(param0: globalAndroid.text.style.CharacterStyle): globalAndroid.text.SpannableString;
                public getPrimaryText(param0: globalAndroid.text.style.CharacterStyle): globalAndroid.text.SpannableString;
                public getPlaceId(): string;
              }
              export module AutocompletePrediction {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.AutocompletePrediction.Builder>;
                  public setPrimaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public constructor();
                  public setFullText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public getPrimaryText(): string;
                  public getPlaceTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
                  public setPlaceTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public build(): com.google.android.libraries.places.api.model.AutocompletePrediction;
                  public setSecondaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public getSecondaryText(): string;
                  public setDistanceMeters(param0: java.lang.Integer): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public getFullText(): string;
                  public getDistanceMeters(): java.lang.Integer;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class AutocompleteSessionToken {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.AutocompleteSessionToken>;
                public toString(): string;
                public constructor();
                public static newInstance(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class DayOfWeek extends globalAndroid.os.Parcelable {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.DayOfWeek>;
                public static SUNDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static MONDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static TUESDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static WEDNESDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static THURSDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static FRIDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static SATURDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.DayOfWeek>;
                public describeContents(): number;
                public static valueOf(param0: string): com.google.android.libraries.places.api.model.DayOfWeek;
                public static values(): androidNative.Array<com.google.android.libraries.places.api.model.DayOfWeek>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class LocalDate extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.LocalDate>;
                public getDay(): number;
                public toString(): string;
                public getYear(): number;
                public compareTo(param0: com.google.android.libraries.places.api.model.LocalDate): number;
                public static newInstance(param0: number, param1: number, param2: number): com.google.android.libraries.places.api.model.LocalDate;
                public constructor();
                public getMonth(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class LocalTime extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.LocalTime>;
                public getHours(): number;
                public getMinutes(): number;
                public compareTo(param0: com.google.android.libraries.places.api.model.LocalTime): number;
                public static newInstance(param0: number, param1: number): com.google.android.libraries.places.api.model.LocalTime;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class LocationBias {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.LocationBias>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.api.model.LocationBias interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class LocationRestriction {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.LocationRestriction>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.api.model.LocationRestriction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {});
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class OpeningHours {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.OpeningHours>;
                public getWeekdayText(): java.util.List<string>;
                public getPeriods(): java.util.List<com.google.android.libraries.places.api.model.Period>;
                public static builder(): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                public getHoursType(): com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                public constructor();
                public getSpecialDays(): java.util.List<com.google.android.libraries.places.api.model.SpecialDay>;
              }
              export module OpeningHours {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.OpeningHours.Builder>;
                  public build(): com.google.android.libraries.places.api.model.OpeningHours;
                  public constructor();
                  public setWeekdayText(param0: java.util.List<string>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                  public setHoursType(param0: com.google.android.libraries.places.api.model.OpeningHours.HoursType): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                  public getHoursType(): com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public getWeekdayText(): java.util.List<string>;
                  public getPeriods(): java.util.List<com.google.android.libraries.places.api.model.Period>;
                  public setPeriods(param0: java.util.List<com.google.android.libraries.places.api.model.Period>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                  public setSpecialDays(param0: java.util.List<com.google.android.libraries.places.api.model.SpecialDay>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                  public getSpecialDays(): java.util.List<com.google.android.libraries.places.api.model.SpecialDay>;
                }
                export class HoursType extends globalAndroid.os.Parcelable {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.OpeningHours.HoursType>;
                  public static ACCESS: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static BREAKFAST: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static BRUNCH: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static DELIVERY: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static DINNER: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static DRIVE_THROUGH: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static HAPPY_HOUR: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static KITCHEN: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static LUNCH: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static ONLINE_SERVICE_HOURS: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static PICKUP: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static SENIOR_HOURS: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static TAKEOUT: com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.OpeningHours.HoursType>;
                  public describeContents(): number;
                  public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                  public static valueOf(param0: string): com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                  public static values(): androidNative.Array<com.google.android.libraries.places.api.model.OpeningHours.HoursType>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class Period {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.Period>;
                public static builder(): com.google.android.libraries.places.api.model.Period.Builder;
                public constructor();
                public getClose(): com.google.android.libraries.places.api.model.TimeOfWeek;
                public getOpen(): com.google.android.libraries.places.api.model.TimeOfWeek;
              }
              export module Period {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.Period.Builder>;
                  public constructor();
                  public setClose(param0: com.google.android.libraries.places.api.model.TimeOfWeek): com.google.android.libraries.places.api.model.Period.Builder;
                  public getClose(): com.google.android.libraries.places.api.model.TimeOfWeek;
                  public build(): com.google.android.libraries.places.api.model.Period;
                  public setOpen(param0: com.google.android.libraries.places.api.model.TimeOfWeek): com.google.android.libraries.places.api.model.Period.Builder;
                  public getOpen(): com.google.android.libraries.places.api.model.TimeOfWeek;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class PhotoMetadata {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.PhotoMetadata>;
                public static builder(param0: string): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                public getAttributions(): string;
                public constructor();
                public getHeight(): number;
                public getWidth(): number;
              }
              export module PhotoMetadata {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.PhotoMetadata.Builder>;
                  public constructor();
                  public setWidth(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                  public build(): com.google.android.libraries.places.api.model.PhotoMetadata;
                  public getAttributions(): string;
                  public setHeight(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                  public getWidth(): number;
                  public getHeight(): number;
                  public setAttributions(param0: string): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class Place {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.Place>;
                public static PRICE_LEVEL_MIN_VALUE: number;
                public static PRICE_LEVEL_MAX_VALUE: number;
                public static RATING_MIN_VALUE: number;
                public static RATING_MAX_VALUE: number;
                public getCurbsidePickup(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
                public getAddressComponents(): com.google.android.libraries.places.api.model.AddressComponents;
                public getServesBeer(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getServesBrunch(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public static builder(): com.google.android.libraries.places.api.model.Place.Builder;
                /** @deprecated */
                public isOpen(param0: number): java.lang.Boolean;
                public getWheelchairAccessibleEntrance(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getPhotoMetadatas(): java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>;
                public getServesLunch(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getRating(): java.lang.Double;
                public getServesBreakfast(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getPriceLevel(): java.lang.Integer;
                public getWebsiteUri(): globalAndroid.net.Uri;
                /** @deprecated */
                public isOpen(): java.lang.Boolean;
                public getUtcOffsetMinutes(): java.lang.Integer;
                public getBusinessStatus(): com.google.android.libraries.places.api.model.Place.BusinessStatus;
                public getServesVegetarianFood(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getUserRatingsTotal(): java.lang.Integer;
                public getLatLng(): com.google.android.gms.maps.model.LatLng;
                public getPhoneNumber(): string;
                public getDelivery(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getName(): string;
                public getTakeout(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getServesDinner(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public constructor();
                public getViewport(): com.google.android.gms.maps.model.LatLngBounds;
                public getCurrentOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
                public getIconUrl(): string;
                public getPlusCode(): com.google.android.libraries.places.api.model.PlusCode;
                public getAddress(): string;
                public getReservable(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getDineIn(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getAttributions(): java.util.List<string>;
                public getSecondaryOpeningHours(): java.util.List<com.google.android.libraries.places.api.model.OpeningHours>;
                public getIconBackgroundColor(): java.lang.Integer;
                public getServesWine(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getId(): string;
                public getOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
              }
              export module Place {
                export class BooleanPlaceAttributeValue extends globalAndroid.os.Parcelable {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue>;
                  public static UNKNOWN: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public static TRUE: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public static FALSE: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue>;
                  public static values(): androidNative.Array<com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue>;
                  public describeContents(): number;
                  public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                  public static valueOf(param0: string): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                }
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.Place.Builder>;
                  public setUserRatingsTotal(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
                  public getServesDinner(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public getServesWine(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public setIconUrl(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                  public getId(): string;
                  public setIconBackgroundColor(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
                  public setViewport(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.libraries.places.api.model.Place.Builder;
                  public setServesBreakfast(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public getCurbsidePickup(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public setServesDinner(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public setWebsiteUri(param0: globalAndroid.net.Uri): com.google.android.libraries.places.api.model.Place.Builder;
                  public getBusinessStatus(): com.google.android.libraries.places.api.model.Place.BusinessStatus;
                  public setBusinessStatus(param0: com.google.android.libraries.places.api.model.Place.BusinessStatus): com.google.android.libraries.places.api.model.Place.Builder;
                  public setServesVegetarianFood(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public getUtcOffsetMinutes(): java.lang.Integer;
                  public setPhoneNumber(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                  public setTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.Place.Builder;
                  public setAddress(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                  public getSecondaryOpeningHours(): java.util.List<com.google.android.libraries.places.api.model.OpeningHours>;
                  public getTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
                  public setWheelchairAccessibleEntrance(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public setTakeout(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public getServesBrunch(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public getWebsiteUri(): globalAndroid.net.Uri;
                  public getUserRatingsTotal(): java.lang.Integer;
                  public getDelivery(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public setPriceLevel(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
                  public getName(): string;
                  public getViewport(): com.google.android.gms.maps.model.LatLngBounds;
                  public setAttributions(param0: java.util.List<string>): com.google.android.libraries.places.api.model.Place.Builder;
                  public getAddressComponents(): com.google.android.libraries.places.api.model.AddressComponents;
                  public getServesBeer(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public getIconUrl(): string;
                  public getReservable(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public setOpeningHours(param0: com.google.android.libraries.places.api.model.OpeningHours): com.google.android.libraries.places.api.model.Place.Builder;
                  public getAddress(): string;
                  public setAddressComponents(param0: com.google.android.libraries.places.api.model.AddressComponents): com.google.android.libraries.places.api.model.Place.Builder;
                  public getServesBreakfast(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public getTakeout(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public getPlusCode(): com.google.android.libraries.places.api.model.PlusCode;
                  public getRating(): java.lang.Double;
                  public build(): com.google.android.libraries.places.api.model.Place;
                  public getIconBackgroundColor(): java.lang.Integer;
                  public getPriceLevel(): java.lang.Integer;
                  public setReservable(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public getServesVegetarianFood(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public getWheelchairAccessibleEntrance(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public setCurrentOpeningHours(param0: com.google.android.libraries.places.api.model.OpeningHours): com.google.android.libraries.places.api.model.Place.Builder;
                  public setServesBeer(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public setServesWine(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public setRating(param0: java.lang.Double): com.google.android.libraries.places.api.model.Place.Builder;
                  public getDineIn(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public getCurrentOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
                  public setServesBrunch(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public setPlusCode(param0: com.google.android.libraries.places.api.model.PlusCode): com.google.android.libraries.places.api.model.Place.Builder;
                  public getAttributions(): java.util.List<string>;
                  public setId(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                  public setSecondaryOpeningHours(param0: java.util.List<com.google.android.libraries.places.api.model.OpeningHours>): com.google.android.libraries.places.api.model.Place.Builder;
                  public setLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.model.Place.Builder;
                  public setDineIn(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public setServesLunch(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public setUtcOffsetMinutes(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
                  public getLatLng(): com.google.android.gms.maps.model.LatLng;
                  public getPhoneNumber(): string;
                  public constructor();
                  public setPhotoMetadatas(param0: java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>): com.google.android.libraries.places.api.model.Place.Builder;
                  public getOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
                  public setCurbsidePickup(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                  public getPhotoMetadatas(): java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>;
                  public setName(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                  public getServesLunch(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                  public setDelivery(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                }
                export class BusinessStatus extends globalAndroid.os.Parcelable {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.Place.BusinessStatus>;
                  public static OPERATIONAL: com.google.android.libraries.places.api.model.Place.BusinessStatus;
                  public static CLOSED_TEMPORARILY: com.google.android.libraries.places.api.model.Place.BusinessStatus;
                  public static CLOSED_PERMANENTLY: com.google.android.libraries.places.api.model.Place.BusinessStatus;
                  public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.Place.BusinessStatus>;
                  public describeContents(): number;
                  public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                  public static values(): androidNative.Array<com.google.android.libraries.places.api.model.Place.BusinessStatus>;
                  public static valueOf(param0: string): com.google.android.libraries.places.api.model.Place.BusinessStatus;
                }
                export class Field extends globalAndroid.os.Parcelable {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.Place.Field>;
                  public static ADDRESS: com.google.android.libraries.places.api.model.Place.Field;
                  public static ADDRESS_COMPONENTS: com.google.android.libraries.places.api.model.Place.Field;
                  public static BUSINESS_STATUS: com.google.android.libraries.places.api.model.Place.Field;
                  public static CURBSIDE_PICKUP: com.google.android.libraries.places.api.model.Place.Field;
                  public static CURRENT_OPENING_HOURS: com.google.android.libraries.places.api.model.Place.Field;
                  public static DELIVERY: com.google.android.libraries.places.api.model.Place.Field;
                  public static DINE_IN: com.google.android.libraries.places.api.model.Place.Field;
                  public static ICON_BACKGROUND_COLOR: com.google.android.libraries.places.api.model.Place.Field;
                  public static ICON_URL: com.google.android.libraries.places.api.model.Place.Field;
                  public static ID: com.google.android.libraries.places.api.model.Place.Field;
                  public static LAT_LNG: com.google.android.libraries.places.api.model.Place.Field;
                  public static NAME: com.google.android.libraries.places.api.model.Place.Field;
                  public static OPENING_HOURS: com.google.android.libraries.places.api.model.Place.Field;
                  public static PHONE_NUMBER: com.google.android.libraries.places.api.model.Place.Field;
                  public static PHOTO_METADATAS: com.google.android.libraries.places.api.model.Place.Field;
                  public static PLUS_CODE: com.google.android.libraries.places.api.model.Place.Field;
                  public static PRICE_LEVEL: com.google.android.libraries.places.api.model.Place.Field;
                  public static RATING: com.google.android.libraries.places.api.model.Place.Field;
                  public static RESERVABLE: com.google.android.libraries.places.api.model.Place.Field;
                  public static SECONDARY_OPENING_HOURS: com.google.android.libraries.places.api.model.Place.Field;
                  public static SERVES_BEER: com.google.android.libraries.places.api.model.Place.Field;
                  public static SERVES_BREAKFAST: com.google.android.libraries.places.api.model.Place.Field;
                  public static SERVES_BRUNCH: com.google.android.libraries.places.api.model.Place.Field;
                  public static SERVES_DINNER: com.google.android.libraries.places.api.model.Place.Field;
                  public static SERVES_LUNCH: com.google.android.libraries.places.api.model.Place.Field;
                  public static SERVES_VEGETARIAN_FOOD: com.google.android.libraries.places.api.model.Place.Field;
                  public static SERVES_WINE: com.google.android.libraries.places.api.model.Place.Field;
                  public static TAKEOUT: com.google.android.libraries.places.api.model.Place.Field;
                  public static TYPES: com.google.android.libraries.places.api.model.Place.Field;
                  public static USER_RATINGS_TOTAL: com.google.android.libraries.places.api.model.Place.Field;
                  public static UTC_OFFSET: com.google.android.libraries.places.api.model.Place.Field;
                  public static VIEWPORT: com.google.android.libraries.places.api.model.Place.Field;
                  public static WEBSITE_URI: com.google.android.libraries.places.api.model.Place.Field;
                  public static WHEELCHAIR_ACCESSIBLE_ENTRANCE: com.google.android.libraries.places.api.model.Place.Field;
                  public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.Place.Field>;
                  public describeContents(): number;
                  public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                  public static valueOf(param0: string): com.google.android.libraries.places.api.model.Place.Field;
                  public static values(): androidNative.Array<com.google.android.libraries.places.api.model.Place.Field>;
                }
                export class Type extends globalAndroid.os.Parcelable {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.Place.Type>;
                  public static OTHER: com.google.android.libraries.places.api.model.Place.Type;
                  public static ACCOUNTING: com.google.android.libraries.places.api.model.Place.Type;
                  public static ADMINISTRATIVE_AREA_LEVEL_1: com.google.android.libraries.places.api.model.Place.Type;
                  public static ADMINISTRATIVE_AREA_LEVEL_2: com.google.android.libraries.places.api.model.Place.Type;
                  public static ADMINISTRATIVE_AREA_LEVEL_3: com.google.android.libraries.places.api.model.Place.Type;
                  public static ADMINISTRATIVE_AREA_LEVEL_4: com.google.android.libraries.places.api.model.Place.Type;
                  public static ADMINISTRATIVE_AREA_LEVEL_5: com.google.android.libraries.places.api.model.Place.Type;
                  public static AIRPORT: com.google.android.libraries.places.api.model.Place.Type;
                  public static AMUSEMENT_PARK: com.google.android.libraries.places.api.model.Place.Type;
                  public static AQUARIUM: com.google.android.libraries.places.api.model.Place.Type;
                  public static ARCHIPELAGO: com.google.android.libraries.places.api.model.Place.Type;
                  public static ART_GALLERY: com.google.android.libraries.places.api.model.Place.Type;
                  public static ATM: com.google.android.libraries.places.api.model.Place.Type;
                  public static BAKERY: com.google.android.libraries.places.api.model.Place.Type;
                  public static BANK: com.google.android.libraries.places.api.model.Place.Type;
                  public static BAR: com.google.android.libraries.places.api.model.Place.Type;
                  public static BEAUTY_SALON: com.google.android.libraries.places.api.model.Place.Type;
                  public static BICYCLE_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static BOOK_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static BOWLING_ALLEY: com.google.android.libraries.places.api.model.Place.Type;
                  public static BUS_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAFE: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAMPGROUND: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAR_DEALER: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAR_RENTAL: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAR_REPAIR: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAR_WASH: com.google.android.libraries.places.api.model.Place.Type;
                  public static CASINO: com.google.android.libraries.places.api.model.Place.Type;
                  public static CEMETERY: com.google.android.libraries.places.api.model.Place.Type;
                  public static CHURCH: com.google.android.libraries.places.api.model.Place.Type;
                  public static CITY_HALL: com.google.android.libraries.places.api.model.Place.Type;
                  public static CLOTHING_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static COLLOQUIAL_AREA: com.google.android.libraries.places.api.model.Place.Type;
                  public static CONTINENT: com.google.android.libraries.places.api.model.Place.Type;
                  public static CONVENIENCE_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static COUNTRY: com.google.android.libraries.places.api.model.Place.Type;
                  public static COURTHOUSE: com.google.android.libraries.places.api.model.Place.Type;
                  public static DENTIST: com.google.android.libraries.places.api.model.Place.Type;
                  public static DEPARTMENT_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static DOCTOR: com.google.android.libraries.places.api.model.Place.Type;
                  public static DRUGSTORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static ELECTRICIAN: com.google.android.libraries.places.api.model.Place.Type;
                  public static ELECTRONICS_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static EMBASSY: com.google.android.libraries.places.api.model.Place.Type;
                  public static ESTABLISHMENT: com.google.android.libraries.places.api.model.Place.Type;
                  public static FINANCE: com.google.android.libraries.places.api.model.Place.Type;
                  public static FIRE_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static FLOOR: com.google.android.libraries.places.api.model.Place.Type;
                  public static FLORIST: com.google.android.libraries.places.api.model.Place.Type;
                  public static FOOD: com.google.android.libraries.places.api.model.Place.Type;
                  public static FUNERAL_HOME: com.google.android.libraries.places.api.model.Place.Type;
                  public static FURNITURE_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static GAS_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static GENERAL_CONTRACTOR: com.google.android.libraries.places.api.model.Place.Type;
                  public static GEOCODE: com.google.android.libraries.places.api.model.Place.Type;
                  public static GROCERY_OR_SUPERMARKET: com.google.android.libraries.places.api.model.Place.Type;
                  public static GYM: com.google.android.libraries.places.api.model.Place.Type;
                  public static HAIR_CARE: com.google.android.libraries.places.api.model.Place.Type;
                  public static HARDWARE_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static HEALTH: com.google.android.libraries.places.api.model.Place.Type;
                  public static HINDU_TEMPLE: com.google.android.libraries.places.api.model.Place.Type;
                  public static HOME_GOODS_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static HOSPITAL: com.google.android.libraries.places.api.model.Place.Type;
                  public static INSURANCE_AGENCY: com.google.android.libraries.places.api.model.Place.Type;
                  public static INTERSECTION: com.google.android.libraries.places.api.model.Place.Type;
                  public static JEWELRY_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static LAUNDRY: com.google.android.libraries.places.api.model.Place.Type;
                  public static LAWYER: com.google.android.libraries.places.api.model.Place.Type;
                  public static LIBRARY: com.google.android.libraries.places.api.model.Place.Type;
                  public static LIGHT_RAIL_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static LIQUOR_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static LOCAL_GOVERNMENT_OFFICE: com.google.android.libraries.places.api.model.Place.Type;
                  public static LOCALITY: com.google.android.libraries.places.api.model.Place.Type;
                  public static LOCKSMITH: com.google.android.libraries.places.api.model.Place.Type;
                  public static LODGING: com.google.android.libraries.places.api.model.Place.Type;
                  public static MEAL_DELIVERY: com.google.android.libraries.places.api.model.Place.Type;
                  public static MEAL_TAKEAWAY: com.google.android.libraries.places.api.model.Place.Type;
                  public static MOSQUE: com.google.android.libraries.places.api.model.Place.Type;
                  public static MOVIE_RENTAL: com.google.android.libraries.places.api.model.Place.Type;
                  public static MOVIE_THEATER: com.google.android.libraries.places.api.model.Place.Type;
                  public static MOVING_COMPANY: com.google.android.libraries.places.api.model.Place.Type;
                  public static MUSEUM: com.google.android.libraries.places.api.model.Place.Type;
                  public static NATURAL_FEATURE: com.google.android.libraries.places.api.model.Place.Type;
                  public static NEIGHBORHOOD: com.google.android.libraries.places.api.model.Place.Type;
                  public static NIGHT_CLUB: com.google.android.libraries.places.api.model.Place.Type;
                  public static PAINTER: com.google.android.libraries.places.api.model.Place.Type;
                  public static PARK: com.google.android.libraries.places.api.model.Place.Type;
                  public static PARKING: com.google.android.libraries.places.api.model.Place.Type;
                  public static PET_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static PHARMACY: com.google.android.libraries.places.api.model.Place.Type;
                  public static PHYSIOTHERAPIST: com.google.android.libraries.places.api.model.Place.Type;
                  public static PLACE_OF_WORSHIP: com.google.android.libraries.places.api.model.Place.Type;
                  public static PLUMBER: com.google.android.libraries.places.api.model.Place.Type;
                  public static PLUS_CODE: com.google.android.libraries.places.api.model.Place.Type;
                  public static POINT_OF_INTEREST: com.google.android.libraries.places.api.model.Place.Type;
                  public static POLICE: com.google.android.libraries.places.api.model.Place.Type;
                  public static POLITICAL: com.google.android.libraries.places.api.model.Place.Type;
                  public static POST_BOX: com.google.android.libraries.places.api.model.Place.Type;
                  public static POST_OFFICE: com.google.android.libraries.places.api.model.Place.Type;
                  public static POSTAL_CODE_PREFIX: com.google.android.libraries.places.api.model.Place.Type;
                  public static POSTAL_CODE_SUFFIX: com.google.android.libraries.places.api.model.Place.Type;
                  public static POSTAL_CODE: com.google.android.libraries.places.api.model.Place.Type;
                  public static POSTAL_TOWN: com.google.android.libraries.places.api.model.Place.Type;
                  public static PREMISE: com.google.android.libraries.places.api.model.Place.Type;
                  public static PRIMARY_SCHOOL: com.google.android.libraries.places.api.model.Place.Type;
                  public static REAL_ESTATE_AGENCY: com.google.android.libraries.places.api.model.Place.Type;
                  public static RESTAURANT: com.google.android.libraries.places.api.model.Place.Type;
                  public static ROOFING_CONTRACTOR: com.google.android.libraries.places.api.model.Place.Type;
                  public static ROOM: com.google.android.libraries.places.api.model.Place.Type;
                  public static ROUTE: com.google.android.libraries.places.api.model.Place.Type;
                  public static RV_PARK: com.google.android.libraries.places.api.model.Place.Type;
                  public static SCHOOL: com.google.android.libraries.places.api.model.Place.Type;
                  public static SECONDARY_SCHOOL: com.google.android.libraries.places.api.model.Place.Type;
                  public static SHOE_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static SHOPPING_MALL: com.google.android.libraries.places.api.model.Place.Type;
                  public static SPA: com.google.android.libraries.places.api.model.Place.Type;
                  public static STADIUM: com.google.android.libraries.places.api.model.Place.Type;
                  public static STORAGE: com.google.android.libraries.places.api.model.Place.Type;
                  public static STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static STREET_ADDRESS: com.google.android.libraries.places.api.model.Place.Type;
                  public static STREET_NUMBER: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY_LEVEL_1: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY_LEVEL_2: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY_LEVEL_3: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY_LEVEL_4: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY_LEVEL_5: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBPREMISE: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBWAY_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUPERMARKET: com.google.android.libraries.places.api.model.Place.Type;
                  public static SYNAGOGUE: com.google.android.libraries.places.api.model.Place.Type;
                  public static TAXI_STAND: com.google.android.libraries.places.api.model.Place.Type;
                  public static TOURIST_ATTRACTION: com.google.android.libraries.places.api.model.Place.Type;
                  public static TOWN_SQUARE: com.google.android.libraries.places.api.model.Place.Type;
                  public static TRAIN_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static TRANSIT_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static TRAVEL_AGENCY: com.google.android.libraries.places.api.model.Place.Type;
                  public static UNIVERSITY: com.google.android.libraries.places.api.model.Place.Type;
                  public static VETERINARY_CARE: com.google.android.libraries.places.api.model.Place.Type;
                  public static ZOO: com.google.android.libraries.places.api.model.Place.Type;
                  public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.Place.Type>;
                  public describeContents(): number;
                  public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                  public static valueOf(param0: string): com.google.android.libraries.places.api.model.Place.Type;
                  public static values(): androidNative.Array<com.google.android.libraries.places.api.model.Place.Type>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class PlaceLikelihood {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.PlaceLikelihood>;
                public static LIKELIHOOD_MIN_VALUE: number;
                public static LIKELIHOOD_MAX_VALUE: number;
                public static newInstance(param0: com.google.android.libraries.places.api.model.Place, param1: number): com.google.android.libraries.places.api.model.PlaceLikelihood;
                public getPlace(): com.google.android.libraries.places.api.model.Place;
                public constructor();
                public getLikelihood(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class PlaceTypes {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.PlaceTypes>;
                public static ACCOUNTING: string;
                public static AIRPORT: string;
                public static AMUSEMENT_PARK: string;
                public static AQUARIUM: string;
                public static ART_GALLERY: string;
                public static ATM: string;
                public static BAKERY: string;
                public static BANK: string;
                public static BAR: string;
                public static BEAUTY_SALON: string;
                public static BICYCLE_STORE: string;
                public static BOOK_STORE: string;
                public static BOWLING_ALLEY: string;
                public static BUS_STATION: string;
                public static CAFE: string;
                public static CAMPGROUND: string;
                public static CAR_DEALER: string;
                public static CAR_RENTAL: string;
                public static CAR_REPAIR: string;
                public static CAR_WASH: string;
                public static CASINO: string;
                public static CEMETERY: string;
                public static CHURCH: string;
                public static CITY_HALL: string;
                public static CLOTHING_STORE: string;
                public static CONVENIENCE_STORE: string;
                public static COURTHOUSE: string;
                public static DENTIST: string;
                public static DEPARTMENT_STORE: string;
                public static DOCTOR: string;
                public static DRUGSTORE: string;
                public static ELECTRICIAN: string;
                public static ELECTRONICS_STORE: string;
                public static EMBASSY: string;
                public static FIRE_STATION: string;
                public static FLORIST: string;
                public static FUNERAL_HOME: string;
                public static FURNITURE_STORE: string;
                public static GAS_STATION: string;
                public static GYM: string;
                public static HAIR_CARE: string;
                public static HARDWARE_STORE: string;
                public static HINDU_TEMPLE: string;
                public static HOME_GOODS_STORE: string;
                public static HOSPITAL: string;
                public static INSURANCE_AGENCY: string;
                public static JEWELRY_STORE: string;
                public static LAUNDRY: string;
                public static LAWYER: string;
                public static LIBRARY: string;
                public static LIGHT_RAIL_STATION: string;
                public static LIQUOR_STORE: string;
                public static LOCAL_GOVERNMENT_OFFICE: string;
                public static LOCKSMITH: string;
                public static LODGING: string;
                public static MEAL_DELIVERY: string;
                public static MEAL_TAKEAWAY: string;
                public static MOSQUE: string;
                public static MOVIE_RENTAL: string;
                public static MOVIE_THEATER: string;
                public static MOVING_COMPANY: string;
                public static MUSEUM: string;
                public static NIGHT_CLUB: string;
                public static PAINTER: string;
                public static PARK: string;
                public static PARKING: string;
                public static PET_STORE: string;
                public static PHARMACY: string;
                public static PHYSIOTHERAPIST: string;
                public static PLUMBER: string;
                public static POLICE: string;
                public static POST_OFFICE: string;
                public static PRIMARY_SCHOOL: string;
                public static REAL_ESTATE_AGENCY: string;
                public static RESTAURANT: string;
                public static ROOFING_CONTRACTOR: string;
                public static RV_PARK: string;
                public static SCHOOL: string;
                public static SECONDARY_SCHOOL: string;
                public static SHOE_STORE: string;
                public static SHOPPING_MALL: string;
                public static SPA: string;
                public static STADIUM: string;
                public static STORAGE: string;
                public static STORE: string;
                public static SUBWAY_STATION: string;
                public static SUPERMARKET: string;
                public static SYNAGOGUE: string;
                public static TAXI_STAND: string;
                public static TOURIST_ATTRACTION: string;
                public static TRAIN_STATION: string;
                public static TRANSIT_STATION: string;
                public static TRAVEL_AGENCY: string;
                public static UNIVERSITY: string;
                public static VETERINARY_CARE: string;
                public static ZOO: string;
                public static ADMINISTRATIVE_AREA_LEVEL_1: string;
                public static ADMINISTRATIVE_AREA_LEVEL_2: string;
                public static ADMINISTRATIVE_AREA_LEVEL_3: string;
                public static ADMINISTRATIVE_AREA_LEVEL_4: string;
                public static ADMINISTRATIVE_AREA_LEVEL_5: string;
                public static ADMINISTRATIVE_AREA_LEVEL_6: string;
                public static ADMINISTRATIVE_AREA_LEVEL_7: string;
                public static ARCHIPELAGO: string;
                public static COLLOQUIAL_AREA: string;
                public static CONTINENT: string;
                public static COUNTRY: string;
                public static FINANCE: string;
                public static FLOOR: string;
                public static FOOD: string;
                public static GENERAL_CONTRACTOR: string;
                public static HEALTH: string;
                public static INTERSECTION: string;
                public static LANDMARK: string;
                public static LOCALITY: string;
                public static NATURAL_FEATURE: string;
                public static NEIGHBORHOOD: string;
                public static PLACE_OF_WORSHIP: string;
                public static PLUS_CODE: string;
                public static POINT_OF_INTEREST: string;
                public static POLITICAL: string;
                public static POST_BOX: string;
                public static POSTAL_CODE: string;
                public static POSTAL_CODE_PREFIX: string;
                public static POSTAL_CODE_SUFFIX: string;
                public static POSTAL_TOWN: string;
                public static PREMISE: string;
                public static ROOM: string;
                public static ROUTE: string;
                public static STREET_ADDRESS: string;
                public static STREET_NUMBER: string;
                public static SUBLOCALITY: string;
                public static SUBLOCALITY_LEVEL_1: string;
                public static SUBLOCALITY_LEVEL_2: string;
                public static SUBLOCALITY_LEVEL_3: string;
                public static SUBLOCALITY_LEVEL_4: string;
                public static SUBLOCALITY_LEVEL_5: string;
                public static SUBPREMISE: string;
                public static TOWN_SQUARE: string;
                public static GEOCODE: string;
                public static ADDRESS: string;
                public static ESTABLISHMENT: string;
                public static REGIONS: string;
                public static CITIES: string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class PlusCode {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.PlusCode>;
                public getGlobalCode(): string;
                public constructor();
                public static builder(): com.google.android.libraries.places.api.model.PlusCode.Builder;
                public getCompoundCode(): string;
              }
              export module PlusCode {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.PlusCode.Builder>;
                  public constructor();
                  public getCompoundCode(): string;
                  public setCompoundCode(param0: string): com.google.android.libraries.places.api.model.PlusCode.Builder;
                  public build(): com.google.android.libraries.places.api.model.PlusCode;
                  public getGlobalCode(): string;
                  public setGlobalCode(param0: string): com.google.android.libraries.places.api.model.PlusCode.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class RectangularBounds implements com.google.android.libraries.places.api.model.LocationBias, com.google.android.libraries.places.api.model.LocationRestriction {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.RectangularBounds>;
                public getSouthwest(): com.google.android.gms.maps.model.LatLng;
                public getNortheast(): com.google.android.gms.maps.model.LatLng;
                public constructor();
                public static newInstance(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.libraries.places.api.model.RectangularBounds;
                public static newInstance(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.model.RectangularBounds;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class SpecialDay {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.SpecialDay>;
                public static builder(param0: com.google.android.libraries.places.api.model.LocalDate): com.google.android.libraries.places.api.model.SpecialDay.Builder;
                public getDate(): com.google.android.libraries.places.api.model.LocalDate;
                public constructor();
                public isExceptional(): boolean;
              }
              export module SpecialDay {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.SpecialDay.Builder>;
                  public getDate(): com.google.android.libraries.places.api.model.LocalDate;
                  public constructor();
                  public isExceptional(): boolean;
                  public setExceptional(param0: boolean): com.google.android.libraries.places.api.model.SpecialDay.Builder;
                  public build(): com.google.android.libraries.places.api.model.SpecialDay;
                  public setDate(param0: com.google.android.libraries.places.api.model.LocalDate): com.google.android.libraries.places.api.model.SpecialDay.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class TimeOfWeek {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.TimeOfWeek>;
                public isTruncated(): boolean;
                public static builder(param0: com.google.android.libraries.places.api.model.DayOfWeek, param1: com.google.android.libraries.places.api.model.LocalTime): com.google.android.libraries.places.api.model.TimeOfWeek.Builder;
                public getDate(): com.google.android.libraries.places.api.model.LocalDate;
                public getTime(): com.google.android.libraries.places.api.model.LocalTime;
                public constructor();
                public getDay(): com.google.android.libraries.places.api.model.DayOfWeek;
                public static newInstance(param0: com.google.android.libraries.places.api.model.DayOfWeek, param1: com.google.android.libraries.places.api.model.LocalTime): com.google.android.libraries.places.api.model.TimeOfWeek;
              }
              export module TimeOfWeek {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.TimeOfWeek.Builder>;
                  public getDate(): com.google.android.libraries.places.api.model.LocalDate;
                  public constructor();
                  public getTime(): com.google.android.libraries.places.api.model.LocalTime;
                  public setTime(param0: com.google.android.libraries.places.api.model.LocalTime): com.google.android.libraries.places.api.model.TimeOfWeek.Builder;
                  public build(): com.google.android.libraries.places.api.model.TimeOfWeek;
                  public getDay(): com.google.android.libraries.places.api.model.DayOfWeek;
                  public setDate(param0: com.google.android.libraries.places.api.model.LocalDate): com.google.android.libraries.places.api.model.TimeOfWeek.Builder;
                  public setDay(param0: com.google.android.libraries.places.api.model.DayOfWeek): com.google.android.libraries.places.api.model.TimeOfWeek.Builder;
                  public isTruncated(): boolean;
                  public setTruncated(param0: boolean): com.google.android.libraries.places.api.model.TimeOfWeek.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class TypeFilter extends globalAndroid.os.Parcelable {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.TypeFilter>;
                public static ADDRESS: com.google.android.libraries.places.api.model.TypeFilter;
                public static CITIES: com.google.android.libraries.places.api.model.TypeFilter;
                public static ESTABLISHMENT: com.google.android.libraries.places.api.model.TypeFilter;
                public static GEOCODE: com.google.android.libraries.places.api.model.TypeFilter;
                public static REGIONS: com.google.android.libraries.places.api.model.TypeFilter;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.TypeFilter>;
                public static valueOf(param0: string): com.google.android.libraries.places.api.model.TypeFilter;
                public describeContents(): number;
                public static values(): androidNative.Array<com.google.android.libraries.places.api.model.TypeFilter>;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zza extends com.google.android.libraries.places.api.model.AddressComponent.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zza>;
                public setShortName(param0: string): com.google.android.libraries.places.api.model.AddressComponent.Builder;
                public getShortName(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzaa extends com.google.android.libraries.places.api.model.SpecialDay {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaa>;
                public toString(): string;
                public getDate(): com.google.android.libraries.places.api.model.LocalDate;
                public equals(param0: any): boolean;
                public hashCode(): number;
                public isExceptional(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzab extends com.google.android.libraries.places.api.model.TimeOfWeek.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzab>;
                public isTruncated(): boolean;
                public getDate(): com.google.android.libraries.places.api.model.LocalDate;
                public setTime(param0: com.google.android.libraries.places.api.model.LocalTime): com.google.android.libraries.places.api.model.TimeOfWeek.Builder;
                public getTime(): com.google.android.libraries.places.api.model.LocalTime;
                public setTruncated(param0: boolean): com.google.android.libraries.places.api.model.TimeOfWeek.Builder;
                public getDay(): com.google.android.libraries.places.api.model.DayOfWeek;
                public setDate(param0: com.google.android.libraries.places.api.model.LocalDate): com.google.android.libraries.places.api.model.TimeOfWeek.Builder;
                public build(): com.google.android.libraries.places.api.model.TimeOfWeek;
                public setDay(param0: com.google.android.libraries.places.api.model.DayOfWeek): com.google.android.libraries.places.api.model.TimeOfWeek.Builder;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzac extends com.google.android.libraries.places.api.model.TimeOfWeek {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzac>;
                public toString(): string;
                public isTruncated(): boolean;
                public getDate(): com.google.android.libraries.places.api.model.LocalDate;
                public equals(param0: any): boolean;
                public getTime(): com.google.android.libraries.places.api.model.LocalTime;
                public getDay(): com.google.android.libraries.places.api.model.DayOfWeek;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzad {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzad>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzae extends com.google.android.libraries.places.api.model.zzb {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzae>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzae>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzaf {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaf>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzag extends com.google.android.libraries.places.api.model.zzc {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzag>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzag>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzah {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzah>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzai extends com.google.android.libraries.places.api.model.zze {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzai>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzai>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzaj {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaj>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzak extends com.google.android.libraries.places.api.model.zzg {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzak>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzak>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzal {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzal>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzam extends com.google.android.libraries.places.api.model.zzh {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzam>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzam>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzan {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzan>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzao extends com.google.android.libraries.places.api.model.zzj {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzao>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzao>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzap {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzap>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzaq extends com.google.android.libraries.places.api.model.zzl {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaq>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzaq>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzar {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzar>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzas extends com.google.android.libraries.places.api.model.zzn {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzas>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzas>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzat {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzat>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzau extends com.google.android.libraries.places.api.model.zzp {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzau>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzau>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzav {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzav>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzaw extends com.google.android.libraries.places.api.model.zzr {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaw>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzaw>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzax {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzax>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzay extends com.google.android.libraries.places.api.model.zzt {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzay>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzay>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzaz {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaz>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzb extends com.google.android.libraries.places.api.model.AddressComponent {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzb>;
                public toString(): string;
                public getShortName(): string;
                public getName(): string;
                public getTypes(): java.util.List<string>;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzba extends com.google.android.libraries.places.api.model.zzu {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzba>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzba>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbb {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbb>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbc extends com.google.android.libraries.places.api.model.zzw {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbc>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzbc>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbd {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbd>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbe extends com.google.android.libraries.places.api.model.zzy {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbe>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzbe>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbf {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbf>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbg extends com.google.android.libraries.places.api.model.zzaa {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbg>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzbg>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbh {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbh>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbi extends com.google.android.libraries.places.api.model.zzac {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbi>;
                public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzbi>*/;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzbj {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbj>;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzbk {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbk>;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbl {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbl>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzbm {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbm>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzbn {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbn>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbo {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbo>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbp {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbp>;
                public compare(param0: any, param1: any): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbq {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbq>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbr {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbr>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbs {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbs>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbt {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbt>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbu {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbu>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzbv {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbv>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzbw {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbw>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzc extends com.google.android.libraries.places.api.model.AddressComponents {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzc>;
                public toString(): string;
                public asList(): java.util.List<com.google.android.libraries.places.api.model.AddressComponent>;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzd extends com.google.android.libraries.places.api.model.AutocompletePrediction.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzd>;
                public setPrimaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                public setDistanceMeters(param0: java.lang.Integer): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                public setFullText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                public getFullText(): string;
                public setPlaceTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                public setSecondaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                public getSecondaryText(): string;
                public getPlaceTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
                public getPrimaryText(): string;
                public getDistanceMeters(): java.lang.Integer;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zze extends com.google.android.libraries.places.api.model.AutocompletePrediction {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zze>;
                public toString(): string;
                public equals(param0: any): boolean;
                public getPlaceTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
                public getDistanceMeters(): java.lang.Integer;
                public hashCode(): number;
                public getPlaceId(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzf extends com.google.android.libraries.places.api.model.zzbj {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzf>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzg extends com.google.android.libraries.places.api.model.zzbk {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzg>;
                public toString(): string;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzh extends com.google.android.libraries.places.api.model.AutocompleteSessionToken {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzh>;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzi extends com.google.android.libraries.places.api.model.zzbm {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzi>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzj extends com.google.android.libraries.places.api.model.LocalDate {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzj>;
                public getDay(): number;
                public getYear(): number;
                public equals(param0: any): boolean;
                public getMonth(): number;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzk extends com.google.android.libraries.places.api.model.zzbn {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzk>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzl extends com.google.android.libraries.places.api.model.LocalTime {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzl>;
                public getHours(): number;
                public getMinutes(): number;
                public toString(): string;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzm extends com.google.android.libraries.places.api.model.OpeningHours.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzm>;
                public setWeekdayText(param0: java.util.List<string>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                public getWeekdayText(): java.util.List<string>;
                public getPeriods(): java.util.List<com.google.android.libraries.places.api.model.Period>;
                public setSpecialDays(param0: java.util.List<com.google.android.libraries.places.api.model.SpecialDay>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                public setHoursType(param0: com.google.android.libraries.places.api.model.OpeningHours.HoursType): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                public getHoursType(): com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                public getSpecialDays(): java.util.List<com.google.android.libraries.places.api.model.SpecialDay>;
                public setPeriods(param0: java.util.List<com.google.android.libraries.places.api.model.Period>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzn extends com.google.android.libraries.places.api.model.OpeningHours {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzn>;
                public toString(): string;
                public getWeekdayText(): java.util.List<string>;
                public getPeriods(): java.util.List<com.google.android.libraries.places.api.model.Period>;
                public equals(param0: any): boolean;
                public getHoursType(): com.google.android.libraries.places.api.model.OpeningHours.HoursType;
                public getSpecialDays(): java.util.List<com.google.android.libraries.places.api.model.SpecialDay>;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzo extends com.google.android.libraries.places.api.model.Period.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzo>;
                public build(): com.google.android.libraries.places.api.model.Period;
                public setClose(param0: com.google.android.libraries.places.api.model.TimeOfWeek): com.google.android.libraries.places.api.model.Period.Builder;
                public setOpen(param0: com.google.android.libraries.places.api.model.TimeOfWeek): com.google.android.libraries.places.api.model.Period.Builder;
                public getClose(): com.google.android.libraries.places.api.model.TimeOfWeek;
                public getOpen(): com.google.android.libraries.places.api.model.TimeOfWeek;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzp extends com.google.android.libraries.places.api.model.Period {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzp>;
                public toString(): string;
                public equals(param0: any): boolean;
                public hashCode(): number;
                public getClose(): com.google.android.libraries.places.api.model.TimeOfWeek;
                public getOpen(): com.google.android.libraries.places.api.model.TimeOfWeek;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzq extends com.google.android.libraries.places.api.model.PhotoMetadata.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzq>;
                public setWidth(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                public setAttributions(param0: string): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                public setHeight(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                public getAttributions(): string;
                public getHeight(): number;
                public getWidth(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzr extends com.google.android.libraries.places.api.model.PhotoMetadata {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzr>;
                public toString(): string;
                public getAttributions(): string;
                public equals(param0: any): boolean;
                public hashCode(): number;
                public getHeight(): number;
                public getWidth(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzs extends com.google.android.libraries.places.api.model.Place.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzs>;
                public getCurbsidePickup(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public setPhoneNumber(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                public setAddressComponents(param0: com.google.android.libraries.places.api.model.AddressComponents): com.google.android.libraries.places.api.model.Place.Builder;
                public getServesBeer(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public setDelivery(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public getWebsiteUri(): globalAndroid.net.Uri;
                public setTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.Place.Builder;
                public getUtcOffsetMinutes(): java.lang.Integer;
                public getServesVegetarianFood(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getUserRatingsTotal(): java.lang.Integer;
                public getLatLng(): com.google.android.gms.maps.model.LatLng;
                public setRating(param0: java.lang.Double): com.google.android.libraries.places.api.model.Place.Builder;
                public setServesDinner(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public getPhoneNumber(): string;
                public setPlusCode(param0: com.google.android.libraries.places.api.model.PlusCode): com.google.android.libraries.places.api.model.Place.Builder;
                public setPriceLevel(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
                public setReservable(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public getTakeout(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public setWheelchairAccessibleEntrance(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public getServesDinner(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getViewport(): com.google.android.gms.maps.model.LatLngBounds;
                public setAttributions(param0: java.util.List<string>): com.google.android.libraries.places.api.model.Place.Builder;
                public getCurrentOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
                public setSecondaryOpeningHours(param0: java.util.List<com.google.android.libraries.places.api.model.OpeningHours>): com.google.android.libraries.places.api.model.Place.Builder;
                public setOpeningHours(param0: com.google.android.libraries.places.api.model.OpeningHours): com.google.android.libraries.places.api.model.Place.Builder;
                public getIconUrl(): string;
                public getAddress(): string;
                public setUserRatingsTotal(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
                public setViewport(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.libraries.places.api.model.Place.Builder;
                public setCurbsidePickup(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public getDineIn(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public setServesBreakfast(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public getIconBackgroundColor(): java.lang.Integer;
                public setServesBeer(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public getOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
                public setTakeout(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public getTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
                public getAddressComponents(): com.google.android.libraries.places.api.model.AddressComponents;
                public getServesBrunch(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public setBusinessStatus(param0: com.google.android.libraries.places.api.model.Place.BusinessStatus): com.google.android.libraries.places.api.model.Place.Builder;
                public getWheelchairAccessibleEntrance(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getPhotoMetadatas(): java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>;
                public getServesLunch(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public setIconUrl(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                public getRating(): java.lang.Double;
                public getServesBreakfast(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public setServesBrunch(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public getPriceLevel(): java.lang.Integer;
                public setDineIn(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public setLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.model.Place.Builder;
                public setServesLunch(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public getBusinessStatus(): com.google.android.libraries.places.api.model.Place.BusinessStatus;
                public setAddress(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                public setPhotoMetadatas(param0: java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>): com.google.android.libraries.places.api.model.Place.Builder;
                public setWebsiteUri(param0: globalAndroid.net.Uri): com.google.android.libraries.places.api.model.Place.Builder;
                public setCurrentOpeningHours(param0: com.google.android.libraries.places.api.model.OpeningHours): com.google.android.libraries.places.api.model.Place.Builder;
                public getDelivery(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getName(): string;
                public setServesWine(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public setIconBackgroundColor(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
                public setServesVegetarianFood(param0: com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue): com.google.android.libraries.places.api.model.Place.Builder;
                public setUtcOffsetMinutes(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
                public setName(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                public getPlusCode(): com.google.android.libraries.places.api.model.PlusCode;
                public setId(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                public getReservable(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getAttributions(): java.util.List<string>;
                public getSecondaryOpeningHours(): java.util.List<com.google.android.libraries.places.api.model.OpeningHours>;
                public getServesWine(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getId(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzt extends com.google.android.libraries.places.api.model.Place {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzt>;
                public getCurbsidePickup(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public toString(): string;
                public getTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
                public getAddressComponents(): com.google.android.libraries.places.api.model.AddressComponents;
                public getServesBeer(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getServesBrunch(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public equals(param0: any): boolean;
                public getWheelchairAccessibleEntrance(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getPhotoMetadatas(): java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>;
                public getServesLunch(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getRating(): java.lang.Double;
                public getServesBreakfast(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getPriceLevel(): java.lang.Integer;
                public getWebsiteUri(): globalAndroid.net.Uri;
                public getUtcOffsetMinutes(): java.lang.Integer;
                public getBusinessStatus(): com.google.android.libraries.places.api.model.Place.BusinessStatus;
                public getServesVegetarianFood(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getUserRatingsTotal(): java.lang.Integer;
                public getLatLng(): com.google.android.gms.maps.model.LatLng;
                public getPhoneNumber(): string;
                public getDelivery(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getName(): string;
                public getTakeout(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getServesDinner(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getViewport(): com.google.android.gms.maps.model.LatLngBounds;
                public getCurrentOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
                public getIconUrl(): string;
                public getPlusCode(): com.google.android.libraries.places.api.model.PlusCode;
                public getAddress(): string;
                public getReservable(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getDineIn(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getAttributions(): java.util.List<string>;
                public getSecondaryOpeningHours(): java.util.List<com.google.android.libraries.places.api.model.OpeningHours>;
                public getIconBackgroundColor(): java.lang.Integer;
                public hashCode(): number;
                public getServesWine(): com.google.android.libraries.places.api.model.Place.BooleanPlaceAttributeValue;
                public getId(): string;
                public getOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzu extends com.google.android.libraries.places.api.model.PlaceLikelihood {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzu>;
                public toString(): string;
                public equals(param0: any): boolean;
                public getPlace(): com.google.android.libraries.places.api.model.Place;
                public getLikelihood(): number;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzv extends com.google.android.libraries.places.api.model.PlusCode.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzv>;
                public getGlobalCode(): string;
                public setCompoundCode(param0: string): com.google.android.libraries.places.api.model.PlusCode.Builder;
                public setGlobalCode(param0: string): com.google.android.libraries.places.api.model.PlusCode.Builder;
                public build(): com.google.android.libraries.places.api.model.PlusCode;
                public getCompoundCode(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzw extends com.google.android.libraries.places.api.model.PlusCode {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzw>;
                public getGlobalCode(): string;
                public toString(): string;
                public equals(param0: any): boolean;
                public hashCode(): number;
                public getCompoundCode(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzx extends com.google.android.libraries.places.api.model.zzbv {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzx>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class zzy extends com.google.android.libraries.places.api.model.RectangularBounds {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzy>;
                public toString(): string;
                public getSouthwest(): com.google.android.gms.maps.model.LatLng;
                public getNortheast(): com.google.android.gms.maps.model.LatLng;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class zzz extends com.google.android.libraries.places.api.model.SpecialDay.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzz>;
                public getDate(): com.google.android.libraries.places.api.model.LocalDate;
                public build(): com.google.android.libraries.places.api.model.SpecialDay;
                public setDate(param0: com.google.android.libraries.places.api.model.LocalDate): com.google.android.libraries.places.api.model.SpecialDay.Builder;
                public setExceptional(param0: boolean): com.google.android.libraries.places.api.model.SpecialDay.Builder;
                public isExceptional(): boolean;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FetchPhotoRequest extends com.google.android.libraries.places.internal.zzgl {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPhotoRequest>;
                public static builder(param0: com.google.android.libraries.places.api.model.PhotoMetadata): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public getMaxWidth(): java.lang.Integer;
                public static newInstance(param0: com.google.android.libraries.places.api.model.PhotoMetadata): com.google.android.libraries.places.api.net.FetchPhotoRequest;
                public constructor();
                public getMaxHeight(): java.lang.Integer;
                public getPhotoMetadata(): com.google.android.libraries.places.api.model.PhotoMetadata;
              }
              export module FetchPhotoRequest {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder>;
                  public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                  public constructor();
                  public getMaxWidth(): java.lang.Integer;
                  public build(): com.google.android.libraries.places.api.net.FetchPhotoRequest;
                  public setMaxWidth(param0: java.lang.Integer): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                  public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                  public setMaxHeight(param0: java.lang.Integer): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                  public getMaxHeight(): java.lang.Integer;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FetchPhotoResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
                public getBitmap(): globalAndroid.graphics.Bitmap;
                public constructor();
                public static newInstance(param0: globalAndroid.graphics.Bitmap): com.google.android.libraries.places.api.net.FetchPhotoResponse;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FetchPlaceRequest extends com.google.android.libraries.places.internal.zzgl {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPlaceRequest>;
                public static builder(param0: string, param1: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
                public static newInstance(param0: string, param1: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.api.net.FetchPlaceRequest;
                public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public constructor();
                public getPlaceId(): string;
                public getPlaceFields(): java.util.List<com.google.android.libraries.places.api.model.Place.Field>;
              }
              export module FetchPlaceRequest {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder>;
                  public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                  public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
                  public constructor();
                  public build(): com.google.android.libraries.places.api.net.FetchPlaceRequest;
                  public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
                  public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FetchPlaceResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
                public getPlace(): com.google.android.libraries.places.api.model.Place;
                public constructor();
                public static newInstance(param0: com.google.android.libraries.places.api.model.Place): com.google.android.libraries.places.api.net.FetchPlaceResponse;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FindAutocompletePredictionsRequest extends com.google.android.libraries.places.internal.zzgl {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest>;
                /** @deprecated */
                public getCountry(): string;
                public getCountries(): java.util.List<string>;
                public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
                public getLocationBias(): com.google.android.libraries.places.api.model.LocationBias;
                public static builder(): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public constructor();
                /** @deprecated */
                public getTypeFilter(): com.google.android.libraries.places.api.model.TypeFilter;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public static newInstance(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest;
                public getLocationRestriction(): com.google.android.libraries.places.api.model.LocationRestriction;
                public getQuery(): string;
                public getOrigin(): com.google.android.gms.maps.model.LatLng;
                public getTypesFilter(): java.util.List<string>;
              }
              export module FindAutocompletePredictionsRequest {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder>;
                  public build(): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest;
                  public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                  public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
                  public constructor();
                  public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public getOrigin(): com.google.android.gms.maps.model.LatLng;
                  public setTypesFilter(param0: java.util.List<string>): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public getLocationRestriction(): com.google.android.libraries.places.api.model.LocationRestriction;
                  public setCountries(param0: androidNative.Array<string>): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public getLocationBias(): com.google.android.libraries.places.api.model.LocationBias;
                  /** @deprecated */
                  public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setOrigin(param0: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setQuery(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public getCountries(): java.util.List<string>;
                  public setCountries(param0: java.util.List<string>): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  /** @deprecated */
                  public getTypeFilter(): com.google.android.libraries.places.api.model.TypeFilter;
                  /** @deprecated */
                  public setCountry(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public getQuery(): string;
                  public getTypesFilter(): java.util.List<string>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FindAutocompletePredictionsResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
                public static newInstance(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction>): com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse;
                public constructor();
                public getAutocompletePredictions(): java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FindCurrentPlaceRequest extends com.google.android.libraries.places.internal.zzgl {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindCurrentPlaceRequest>;
                public static builder(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public constructor();
                public static newInstance(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest;
                public getPlaceFields(): java.util.List<com.google.android.libraries.places.api.model.Place.Field>;
              }
              export module FindCurrentPlaceRequest {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder>;
                  public build(): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest;
                  public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                  public constructor();
                  public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FindCurrentPlaceResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
                public static newInstance(param0: java.util.List<com.google.android.libraries.places.api.model.PlaceLikelihood>): com.google.android.libraries.places.api.net.FindCurrentPlaceResponse;
                public getPlaceLikelihoods(): java.util.List<com.google.android.libraries.places.api.model.PlaceLikelihood>;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class IsOpenRequest extends com.google.android.libraries.places.internal.zzgl {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.IsOpenRequest>;
                public getUtcTimeMillis(): number;
                public static newInstance(param0: com.google.android.libraries.places.api.model.Place): com.google.android.libraries.places.api.net.IsOpenRequest;
                public getPlace(): com.google.android.libraries.places.api.model.Place;
                public constructor();
                public static builder(param0: string): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                public static newInstance(param0: string, param1: number): com.google.android.libraries.places.api.net.IsOpenRequest;
                public static builder(param0: string, param1: number): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                public static builder(param0: com.google.android.libraries.places.api.model.Place, param1: number): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public static newInstance(param0: string): com.google.android.libraries.places.api.net.IsOpenRequest;
                public static builder(param0: com.google.android.libraries.places.api.model.Place): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                public static newInstance(param0: com.google.android.libraries.places.api.model.Place, param1: number): com.google.android.libraries.places.api.net.IsOpenRequest;
                public getPlaceId(): string;
              }
              export module IsOpenRequest {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.net.IsOpenRequest.Builder>;
                  public getPlace(): com.google.android.libraries.places.api.model.Place;
                  public getUtcTimeMillis(): number;
                  public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                  public constructor();
                  public build(): com.google.android.libraries.places.api.net.IsOpenRequest;
                  public setPlace(param0: com.google.android.libraries.places.api.model.Place): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                  public setUtcTimeMillis(param0: number): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                  public getPlaceId(): string;
                  public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                  public setPlaceId(param0: string): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class IsOpenResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.IsOpenResponse>;
                public isOpen(): java.lang.Boolean;
                public constructor();
                public static newInstance(param0: java.lang.Boolean): com.google.android.libraries.places.api.net.IsOpenResponse;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class PlacesClient {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.PlacesClient>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.api.net.PlacesClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  fetchPhoto(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
                  fetchPlace(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
                  findAutocompletePredictions(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
                  findCurrentPlace(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
                  isOpen(param0: com.google.android.libraries.places.api.net.IsOpenRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.IsOpenResponse>;
                });
                public constructor();
                public fetchPlace(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
                public findAutocompletePredictions(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
                public isOpen(param0: com.google.android.libraries.places.api.net.IsOpenRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.IsOpenResponse>;
                public fetchPhoto(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
                public findCurrentPlace(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class PlacesStatusCodes {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.PlacesStatusCodes>;
                public static OVER_QUERY_LIMIT: number;
                public static REQUEST_DENIED: number;
                public static INVALID_REQUEST: number;
                public static NOT_FOUND: number;
                public static isError(param0: number): boolean;
                public constructor();
                public static getStatusCodeString(param0: number): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zza extends com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zza>;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public getMaxWidth(): java.lang.Integer;
                public setMaxWidth(param0: java.lang.Integer): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                public getMaxHeight(): java.lang.Integer;
                public setMaxHeight(param0: java.lang.Integer): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzb {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzb>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzc extends com.google.android.libraries.places.api.net.FetchPhotoRequest {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzc>;
                public toString(): string;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public getMaxWidth(): java.lang.Integer;
                public equals(param0: any): boolean;
                public getMaxHeight(): java.lang.Integer;
                public hashCode(): number;
                public getPhotoMetadata(): com.google.android.libraries.places.api.model.PhotoMetadata;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzd extends com.google.android.libraries.places.api.net.FetchPhotoResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzd>;
                public toString(): string;
                public equals(param0: any): boolean;
                public getBitmap(): globalAndroid.graphics.Bitmap;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zze extends com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zze>;
                public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
                public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzf {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzf>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzg extends com.google.android.libraries.places.api.net.FetchPlaceRequest {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzg>;
                public toString(): string;
                public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public equals(param0: any): boolean;
                public hashCode(): number;
                public getPlaceId(): string;
                public getPlaceFields(): java.util.List<com.google.android.libraries.places.api.model.Place.Field>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzh extends com.google.android.libraries.places.api.net.FetchPlaceResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzh>;
                public toString(): string;
                public equals(param0: any): boolean;
                public getPlace(): com.google.android.libraries.places.api.model.Place;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzi extends com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzi>;
                /** @deprecated */
                public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public getCountries(): java.util.List<string>;
                public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
                public getLocationBias(): com.google.android.libraries.places.api.model.LocationBias;
                public setCountries(param0: androidNative.Array<string>): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public setCountries(param0: java.util.List<string>): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public setTypesFilter(param0: java.util.List<string>): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public setOrigin(param0: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public setQuery(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                /** @deprecated */
                public getTypeFilter(): com.google.android.libraries.places.api.model.TypeFilter;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public getLocationRestriction(): com.google.android.libraries.places.api.model.LocationRestriction;
                public getTypeFilter(): com.google.android.libraries.places.api.model.TypeFilter;
                public getQuery(): string;
                public getOrigin(): com.google.android.gms.maps.model.LatLng;
                public getTypesFilter(): java.util.List<string>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzj {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzj>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzk extends com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzk>;
                public toString(): string;
                public getCountries(): java.util.List<string>;
                public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
                public getLocationBias(): com.google.android.libraries.places.api.model.LocationBias;
                /** @deprecated */
                public getTypeFilter(): com.google.android.libraries.places.api.model.TypeFilter;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public equals(param0: any): boolean;
                public getLocationRestriction(): com.google.android.libraries.places.api.model.LocationRestriction;
                public getQuery(): string;
                public hashCode(): number;
                public getOrigin(): com.google.android.gms.maps.model.LatLng;
                public getTypesFilter(): java.util.List<string>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzl extends com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzl>;
                public toString(): string;
                public equals(param0: any): boolean;
                public hashCode(): number;
                public getAutocompletePredictions(): java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzm extends com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzm>;
                public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzn {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzn>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzo extends com.google.android.libraries.places.api.net.FindCurrentPlaceRequest {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzo>;
                public toString(): string;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public equals(param0: any): boolean;
                public hashCode(): number;
                public getPlaceFields(): java.util.List<com.google.android.libraries.places.api.model.Place.Field>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzp extends com.google.android.libraries.places.api.net.FindCurrentPlaceResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzp>;
                public toString(): string;
                public equals(param0: any): boolean;
                public getPlaceLikelihoods(): java.util.List<com.google.android.libraries.places.api.model.PlaceLikelihood>;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzq extends com.google.android.libraries.places.api.net.IsOpenRequest.Builder {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzq>;
                public setPlaceId(param0: string): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                public getUtcTimeMillis(): number;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public setUtcTimeMillis(param0: number): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                public getPlace(): com.google.android.libraries.places.api.model.Place;
                public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                public setPlace(param0: com.google.android.libraries.places.api.model.Place): com.google.android.libraries.places.api.net.IsOpenRequest.Builder;
                public getPlaceId(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzr {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzr>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzs extends com.google.android.libraries.places.api.net.IsOpenRequest {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzs>;
                public toString(): string;
                public getUtcTimeMillis(): number;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public equals(param0: any): boolean;
                public getPlace(): com.google.android.libraries.places.api.model.Place;
                public hashCode(): number;
                public getPlaceId(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class zzt extends com.google.android.libraries.places.api.net.IsOpenResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzt>;
                public toString(): string;
                public equals(param0: any): boolean;
                public isOpen(): java.lang.Boolean;
                public hashCode(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zza {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zza>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaa extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaaa extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaaa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaab extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaab>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaac extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaac>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaad extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaad>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaae extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaae>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaaf extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaaf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaag extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaag>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaah extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaah>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaai extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaai>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaaj extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaaj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaak extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaak>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaal extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaal>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaam extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaam>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaan extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaan>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaao extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaao>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaap extends com.google.android.libraries.places.internal.zzagf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaap>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaaq extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaaq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaar extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaar>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaas extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaas>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaat extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaat>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaau extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaau>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaav extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaav>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaaw extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaaw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaax extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaax>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaay extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaay>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaaz extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaaz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzab {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzab>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaba extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaba>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabb extends com.google.android.libraries.places.internal.zzagf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabc extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabd extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabe extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabe>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabf extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabg extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabh extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabi extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabj extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabk extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabl extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabm extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabn extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabo extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabp extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabq extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabr extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabs extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabs>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabt extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabu extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabv extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabw extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabx extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaby extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaby>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzabz extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzabz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzac extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzac>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaca extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaca>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacb extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacc extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacd extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzace extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzace>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacf extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacg extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzach extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzach>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaci extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaci>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacj extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzack extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzack>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacl extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacm extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacn extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaco extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaco>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacp extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacq extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacr extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacs extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacs>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzact extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzact>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacu extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacv extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacw extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacx extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacy extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzacz extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzacz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzad extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzad>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzada extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzada>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadb extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadd extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzade extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzade>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadg extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadh extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadm extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadn extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzado {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzado>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadp extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadq extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzads extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzads>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadt extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadv extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadw extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzady extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzady>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzadz extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzadz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzae {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzae>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaea extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaea>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaeb extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaeb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaec {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaec>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaed extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaed>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaee extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaee>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaef extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaef>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaeg extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaeg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaeh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaeh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaei extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaei>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaej extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaej>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaek {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaek>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzael extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzael>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaem extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaem>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaen {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaen>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaeo extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaeo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaep extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaep>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzaeq<MessageType, BuilderType> extends java.lang.Object /* com.google.android.libraries.places.internal.zzahg*/ {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaeq<any, any>>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzaer<MessageType, BuilderType> extends java.lang.Object /* com.google.android.libraries.places.internal.zzahh*/ {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaer<any, any>>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzaes implements com.google.android.libraries.places.internal.zzagh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaes>;
              public remove(param0: number): any;
              public set(param0: number, param1: any): any;
              public removeAll(param0: java.util.Collection<any>): boolean;
              public add(param0: any): boolean;
              public hashCode(): number;
              public remove(param0: any): boolean;
              public add(param0: number, param1: any): void;
              public retainAll(param0: java.util.Collection<any>): boolean;
              public clear(): void;
              public equals(param0: any): boolean;
              public addAll(param0: java.util.Collection<any>): boolean;
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaet {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaet>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaeu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaeu>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaev extends com.google.android.libraries.places.internal.zzaex {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaev>;
              public hasNext(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaew {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaew>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzaex extends com.google.android.libraries.places.internal.zzaez {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaex>;
              public remove(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaey extends com.google.android.libraries.places.internal.zzafb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaey>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaez {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaez>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzaez interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): number });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaf extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzafa extends com.google.android.libraries.places.internal.zzafe {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafb extends com.google.android.libraries.places.internal.zzafa {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafb>;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzafe {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafe>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaff {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaff>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafg extends com.google.android.libraries.places.internal.zzafi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafj extends com.google.android.libraries.places.internal.zzafm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzafm extends com.google.android.libraries.places.internal.zzaeu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafn extends com.google.android.libraries.places.internal.zzaja {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafo {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzafp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafq extends com.google.android.libraries.places.internal.zzafp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafs {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafs>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzafs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): number; zzb(): any /* com.google.android.libraries.places.internal.zzaiy*/; zzc(): boolean });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaft {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaft>;
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafu>;
              public static values(): any /* androidNative.Array<com.google.android.libraries.places.internal.zzafu>*/;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafv extends com.google.android.libraries.places.internal.zzahf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafw<MessageType, BuilderType> extends java.lang.Object /* com.google.android.libraries.places.internal.zzaeq<any,any>*/ {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafw<any, any>>;
              public constructor();
              public constructor(param0: any);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzafx extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafx>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzafy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzafz<MessageType, BuilderType> extends java.lang.Object /* com.google.android.libraries.places.internal.zzaer<any,any>*/ {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzafz<any, any>>;
              public constructor();
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzag extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzag>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaga extends com.google.android.libraries.places.internal.zzaes implements com.google.android.libraries.places.internal.zzage, com.google.android.libraries.places.internal.zzaho {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaga>;
              public contains(param0: any): boolean;
              public size(): number;
              public hashCode(): number;
              public indexOf(param0: any): number;
              public equals(param0: any): boolean;
              public removeRange(param0: number, param1: number): void;
              public addAll(param0: java.util.Collection<any>): boolean;
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagb>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzagb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagc>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzagc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagd>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzagd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzage extends com.google.android.libraries.places.internal.zzagh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzage>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzf(param0: number): any /* com.google.android.libraries.places.internal.zzagh*/; zzb(): void; zzc(): boolean });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagf>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzagf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagg extends com.google.android.libraries.places.internal.zzagh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagg>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzagg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzf(param0: number): any /* com.google.android.libraries.places.internal.zzagh*/; zzb(): void; zzc(): boolean });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagh>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzagh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzf(param0: number): any /* com.google.android.libraries.places.internal.zzagh*/; zzb(): void; zzc(): boolean });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagj extends com.google.android.libraries.places.internal.zzagk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagj>;
              public constructor(param0: string);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagk>;
              public constructor(param0: string);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagl>;
              public static values(): any /* androidNative.Array<com.google.android.libraries.places.internal.zzagl>*/;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagm extends com.google.android.libraries.places.internal.zzagn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagm>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagn>;
              public constructor();
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzago extends com.google.android.libraries.places.internal.zzaes implements com.google.android.libraries.places.internal.zzagp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzago>;
              public constructor();
              public size(): number;
              public clear(): void;
              public addAll(param0: java.util.Collection<any>): boolean;
              public constructor(param0: number);
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagp>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzagp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzd(): any /* com.google.android.libraries.places.internal.zzagp*/; zze(param0: number): any; zzh(): java.util.List<any> });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagr extends com.google.android.libraries.places.internal.zzagv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzags {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzags>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagt extends com.google.android.libraries.places.internal.zzagv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzagv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagw extends com.google.android.libraries.places.internal.zzaes implements com.google.android.libraries.places.internal.zzagg, com.google.android.libraries.places.internal.zzaho {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagw>;
              public contains(param0: any): boolean;
              public size(): number;
              public hashCode(): number;
              public indexOf(param0: any): number;
              public equals(param0: any): boolean;
              public removeRange(param0: number, param1: number): void;
              public addAll(param0: java.util.Collection<any>): boolean;
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagx extends com.google.android.libraries.places.internal.zzahf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagy extends com.google.android.libraries.places.internal.zzahf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzagz extends com.google.android.libraries.places.internal.zzaht {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzagz>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzah extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzah>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaha {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaha>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahb>;
              public hashCode(): number;
              public remove(param0: any): any;
              public entrySet(): java.util.Set<any>;
              public putAll(param0: java.util.Map<any, any>): void;
              public clear(): void;
              public put(param0: any, param1: any): any;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahe {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahe>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzahe interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): any /* com.google.android.libraries.places.internal.zzahh*/; zzb(): boolean; zzc(): number });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahf>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzahf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzb(param0: java.lang.Class<any>): any /* com.google.android.libraries.places.internal.zzahe*/; zzc(param0: java.lang.Class<any>): boolean });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahg extends com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahg>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzahg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzs(): any /* com.google.android.libraries.places.internal.zzahh*/; zzt(): any /* com.google.android.libraries.places.internal.zzahh*/ });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahh extends com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahh>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzahh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzv(): number; zzs(): any /* com.google.android.libraries.places.internal.zzafe*/; zzD(): any /* com.google.android.libraries.places.internal.zzahg*/; zzK(param0: any /* com.google.android.libraries.places.internal.zzafm*/): void; zzt(): any /* com.google.android.libraries.places.internal.zzahh*/ });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahi>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzahi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzt(): any /* com.google.android.libraries.places.internal.zzahh*/ });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahk<T> extends java.lang.Object /* com.google.android.libraries.places.internal.zzahs<any>*/ {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahk<any>>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahl extends com.google.android.libraries.places.internal.zzahs<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaho {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaho>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzaho interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahq extends com.google.android.libraries.places.internal.zzaes {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahq>;
              public remove(param0: number): any;
              public set(param0: number, param1: any): any;
              public size(): number;
              public add(param0: any): boolean;
              public remove(param0: any): boolean;
              public add(param0: number, param1: any): void;
              public get(param0: number): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahr extends com.google.android.libraries.places.internal.zzahe {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahs<T> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahs<any>>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzahs<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: any): number; zzb(param0: any): number; zzc(): any; zzd(param0: any): void; zze(param0: any, param1: any): void; zzf(param0: any, param1: any /* com.google.android.libraries.places.internal.zzaja*/): void; zzg(param0: any, param1: any): boolean; zzh(param0: any): boolean });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaht {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaht>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzaht interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: java.lang.Class<any>): any /* com.google.android.libraries.places.internal.zzahs<any>*/ });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahv extends com.google.android.libraries.places.internal.zzaif {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahw>;
              public remove(): void;
              public hasNext(): boolean;
              public next(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahx>;
              public iterator(): java.util.Iterator<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzahz {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzahz>;
              public getValue(): any;
              public hashCode(): number;
              public toString(): string;
              public setValue(param0: any): any;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzai {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzai>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaia {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaia>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaib {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaib>;
              public remove(): void;
              public hasNext(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaic {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaic>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaid {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaid>;
              public contains(param0: any): boolean;
              public size(): number;
              public remove(param0: any): boolean;
              public clear(): void;
              public iterator(): java.util.Iterator<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaie {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaie>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaif {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaif>;
              public get(param0: any): any;
              public size(): number;
              public hashCode(): number;
              public remove(param0: any): any;
              public entrySet(): java.util.Set<any>;
              public containsKey(param0: any): boolean;
              public clear(): void;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaig extends com.google.android.libraries.places.internal.zzahe {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaig>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaih {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaih>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaii {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaii>;
              public constructor(param0: any /* com.google.android.libraries.places.internal.zzahh*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzaij {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaij>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaik {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaik>;
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzail extends com.google.android.libraries.places.internal.zzaij {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzail>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaim {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaim>;
              public previousIndex(): number;
              public nextIndex(): number;
              public remove(): void;
              public hasNext(): boolean;
              public hasPrevious(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzain {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzain>;
              public remove(): void;
              public hasNext(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaio implements com.google.android.libraries.places.internal.zzagp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaio>;
              public size(): number;
              public listIterator(param0: number): java.util.ListIterator<any>;
              public constructor(param0: any /* com.google.android.libraries.places.internal.zzagp*/);
              public iterator(): java.util.Iterator<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaip {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaip>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaiq extends com.google.android.libraries.places.internal.zzais {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaiq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzair extends com.google.android.libraries.places.internal.zzais {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzair>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzais {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzais>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzait {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzait>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzaiu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaiu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaiv extends com.google.android.libraries.places.internal.zzaiu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaiv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaiw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaiw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaix {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaix>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaiy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaiy>;
              public static values(): any /* androidNative.Array<com.google.android.libraries.places.internal.zzaiy>*/;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaiz {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaiz>;
              public static values(): any /* androidNative.Array<com.google.android.libraries.places.internal.zzaiz>*/;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaj extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaja {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaja>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzaja interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zzb(param0: number, param1: boolean): void;
                zzc(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzd(param0: number, param1: any /* com.google.android.libraries.places.internal.zzafe*/): void;
                zze(param0: number, param1: java.util.List<any>): void;
                zzf(param0: number, param1: number): void;
                zzg(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzh(param0: number, param1: number): void;
                zzi(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzj(param0: number, param1: number): void;
                zzk(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzl(param0: number, param1: number): void;
                zzm(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzn(param0: number, param1: number): void;
                zzo(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzp(param0: number, param1: any, param2: any /* com.google.android.libraries.places.internal.zzahs<any>*/): void;
                zzq(param0: number, param1: number): void;
                zzr(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzs(param0: number, param1: number): void;
                zzt(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzu(param0: number, param1: any, param2: any /* com.google.android.libraries.places.internal.zzahs<any>*/): void;
                zzv(param0: number, param1: number): void;
                zzw(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzx(param0: number, param1: number): void;
                zzy(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzz(param0: number, param1: number): void;
                zzA(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzB(param0: number, param1: number): void;
                zzC(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzD(param0: number, param1: string): void;
                zzE(param0: number, param1: java.util.List<any>): void;
                zzF(param0: number, param1: number): void;
                zzG(param0: number, param1: java.util.List<any>, param2: boolean): void;
                zzH(param0: number, param1: number): void;
                zzI(param0: number, param1: java.util.List<any>, param2: boolean): void;
              });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzajb extends com.google.android.libraries.places.internal.zzagc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzajb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzajc extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzajc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzajd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzajd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaje {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaje>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzajf extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzajf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzajg>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzajg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zzb(): any });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzak extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzak>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzal extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzal>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzam extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzam>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzan {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzan>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzao extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzao>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzap extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzap>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaq extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzar extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzar>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzas {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzas>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzat extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzat>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzau extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzau>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzav {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzav>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaw extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzax extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzax>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzay extends com.google.android.libraries.places.internal.zzagf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzay>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzaz extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzb extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzba extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzba>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbb extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbd extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbe extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbe>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbg extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbh extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbi extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbj extends com.google.android.libraries.places.internal.zzagf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbk extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbl extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbn extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbo extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbp extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbq extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbr extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbs {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbs>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbt extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbu extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbv extends com.google.android.libraries.places.internal.zzagc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbw extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzby extends com.google.android.libraries.places.internal.zzagc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzby>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzbz extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzc extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzca {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzca>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcc extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcd extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzce extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzce>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcg extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzch extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzch>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzci extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzci>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcj extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzck {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzck>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcl extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcm extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcn>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzcn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): number });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzco {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzco>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcp extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcp>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcq extends com.google.android.libraries.places.internal.zzcn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcq>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcr extends com.google.android.libraries.places.internal.zzct {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcs {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcs>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzct {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzct>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzct interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcv>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzcz extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzd extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzda {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzda>;
              public static values(): any /* androidNative.Array<com.google.android.libraries.places.internal.zzda>*/;
              public static valueOf(param0: string): any /* com.google.android.libraries.places.internal.zzda*/;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdb>;
              public constructor(param0: globalAndroid.net.wifi.WifiInfo, param1: globalAndroid.net.wifi.ScanResult);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdc>;
              public compare(param0: any, param1: any): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzde extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzde>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdf extends com.google.android.libraries.places.internal.zzgj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdg extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdi>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzdi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): com.google.android.gms.tasks.Task; zzb(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): com.google.android.gms.tasks.Task; zzc(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): com.google.android.gms.tasks.Task; zzd(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest, param1: globalAndroid.location.Location, param2: any /* com.google.android.libraries.places.internal.zzjq*/): com.google.android.gms.tasks.Task });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdj>;
              public onResponse(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdk>;
              public onErrorResponse(param0: com.android.volley.VolleyError): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdl>;
              public onCanceled(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdm>;
              public getHeaders(): java.util.Map<any, any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdo extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdp>;
              public onResponse(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdq>;
              public onErrorResponse(param0: com.android.volley.VolleyError): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdr>;
              public onCanceled(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzds {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzds>;
              public getHeaders(): java.util.Map<any, any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdt {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdu extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzdv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdv>;
              public constructor(param0: any /* com.google.android.libraries.places.internal.zzgl*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdw<TypeT, ResponseT> extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdw<any, any>>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdx>;
              public constructor(param0: string);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdy>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzdz {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdz>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zze extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zze>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzea {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzea>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzeb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeb>;
              public then(param0: any): com.google.android.gms.tasks.Task;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzec {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzec>;
              public then(param0: any): com.google.android.gms.tasks.Task;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzed {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzed>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzee {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzee>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzef {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzef>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzeg extends com.google.android.libraries.places.api.net.PlacesClient {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeg>;
              public findCurrentPlace(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
              public findAutocompletePredictions(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
              public fetchPhoto(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
              public isOpen(param0: com.google.android.libraries.places.api.net.IsOpenRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.IsOpenResponse>;
              public fetchPlace(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzeh extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzei {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzei>;
            }
            export module zzei {
              export class zza {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.zzei.zza>;
              }
              export class zzb {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.zzei.zzb>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzej extends com.google.android.libraries.places.internal.zzfc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzej>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzek {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzek>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzel {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzel>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzem extends com.google.android.libraries.places.internal.zzfd<any, any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzem>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzen {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzen>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzeo extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzep extends com.google.android.libraries.places.internal.zzfc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzep>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzeq extends com.google.android.libraries.places.internal.zzfd<any, com.google.android.libraries.places.api.net.FetchPlaceResponse> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzer {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzer>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzes extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzes>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzet extends com.google.android.libraries.places.internal.zzfc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzet>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzeu extends com.google.android.libraries.places.internal.zzfd<any, com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzev {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzev>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzew extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzew>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzex extends com.google.android.libraries.places.internal.zzfc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzex>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzey extends com.google.android.libraries.places.internal.zzfd<any, com.google.android.libraries.places.api.net.FindCurrentPlaceResponse> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzey>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzez {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzez>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzf extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfa extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfb>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzfc extends com.google.android.libraries.places.internal.zzdv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfc>;
              public constructor(param0: any /* com.google.android.libraries.places.internal.zzgl*/);
              public constructor(param0: any /* com.google.android.libraries.places.internal.zzgl*/, param1: java.util.Locale, param2: string, param3: boolean, param4: any /* com.google.android.libraries.places.internal.zzgx*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfd<TypeT, ResponseT> extends java.lang.Object /* com.google.android.libraries.places.internal.zzdw<any,any>*/ {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfd<any, any>>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfe {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfe>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzff {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzff>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfg>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfh>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfi>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfj>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfk>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfl>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfm extends com.google.android.libraries.places.internal.zzdi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfn extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfo {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfq extends com.google.android.libraries.places.internal.zzajg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfs {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs>;
            }
            export module zzfs {
              export class zza {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs.zza>;
              }
              export class zzb {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs.zzb>;
              }
              export module zzb {
                export class zza {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs.zzb.zza>;
                }
                export class zzb {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs.zzb.zzb>;
                }
              }
              export class zzc {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs.zzc>;
              }
              export module zzc {
                export class zza {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs.zzc.zza>;
                }
                export class zzb {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs.zzc.zzb>;
                }
                export class zzc {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs.zzc.zzc>;
                }
              }
              export class zzd {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs.zzd>;
              }
              export class zze {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs.zze>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzft {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzft>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfx>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfy>;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzfz {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfz>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzg extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzga {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzga>;
              public onComplete(param0: com.google.android.gms.tasks.Task): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgb>;
              public constructor(param0: any /* com.google.android.libraries.places.internal.zzfx*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgd extends com.google.android.libraries.places.internal.zzgh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzge {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzge>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgf extends com.google.android.libraries.places.internal.zzgi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgh>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzgh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: any /* com.google.android.libraries.places.internal.zzgk*/): any /* com.google.android.libraries.places.internal.zzgh*/; zzb(param0: any /* com.google.android.libraries.places.internal.zzgr*/): any /* com.google.android.libraries.places.internal.zzgh*/; zzc(param0: globalAndroid.content.Context): any /* com.google.android.libraries.places.internal.zzgh*/; zzd(): any /* com.google.android.libraries.places.internal.zzgi*/ });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgi>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzgi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(): com.google.android.libraries.places.api.net.PlacesClient });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgj>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzgj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                zza(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): void;
                zzb(param0: com.google.android.gms.tasks.Task, param1: number, param2: number): void;
                zzc(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): void;
                zzd(param0: com.google.android.gms.tasks.Task, param1: number, param2: number): void;
                zze(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): void;
                zzf(param0: com.google.android.gms.tasks.Task, param1: number, param2: number): void;
                zzg(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest, param1: com.google.android.gms.tasks.Task, param2: number, param3: number): void;
                zzh(param0: com.google.android.gms.tasks.Task, param1: number, param2: number): void;
              });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgl>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzgl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { getCancellationToken(): com.google.android.gms.tasks.CancellationToken });
              public constructor();
              public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgn extends com.google.android.libraries.places.internal.zzgq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgo {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgp extends com.google.android.libraries.places.internal.zzgr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgp>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzgq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgq>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzgr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgr>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgs {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgs>;
              public removeEldestEntry(param0: java.util.Map.Entry<any, any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgt {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgu>;
              public apply(param0: any): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgv>;
              public constructor(param0: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgx>;
              public constructor(param0: globalAndroid.content.Context);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzgz extends com.google.android.libraries.places.internal.zzhi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzh extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzha extends com.google.android.libraries.places.internal.zzhj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzha>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhc extends com.google.android.libraries.places.internal.zzha {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhc>;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.internal.zzhc>*/;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhd extends com.google.android.libraries.places.internal.zzhk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhe {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhe>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhf extends com.google.android.libraries.places.internal.zzhl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhf>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhg {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhh extends globalAndroid.os.Parcelable {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhh>;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.internal.zzhh>*/;
              public static values(): any /* androidNative.Array<com.google.android.libraries.places.internal.zzhh>*/;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public static valueOf(param0: string): any /* com.google.android.libraries.places.internal.zzhh*/;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzhi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhi>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzhj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhj>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzhk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhk>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzhl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhl>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzho extends com.google.android.libraries.places.internal.zzht {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhp extends com.google.android.libraries.places.internal.zzhu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhp>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhq>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzhq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: com.google.android.libraries.places.api.model.AutocompletePrediction): com.google.android.gms.tasks.Task; zzb(param0: string): com.google.android.gms.tasks.Task; zzc(): void });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhs {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhs>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzht extends com.google.android.libraries.places.internal.zzhw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzht>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzhu extends com.google.android.libraries.places.internal.zzhw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzhw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhx extends com.google.android.libraries.places.internal.zzhq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhx>;
              public constructor(param0: com.google.android.libraries.places.api.net.PlacesClient, param1: any /* com.google.android.libraries.places.internal.zzhj*/, param2: com.google.android.libraries.places.api.model.AutocompleteSessionToken);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhy>;
              public onComplete(param0: com.google.android.gms.tasks.Task): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzhz {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhz>;
              public onComplete(param0: com.google.android.gms.tasks.Task): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzi extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzia {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzia>;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzib {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzib>;
              public constructor(param0: any /* com.google.android.libraries.places.internal.zzhq*/, param1: any /* com.google.android.libraries.places.internal.zzig*/, param2: any /* com.google.android.libraries.places.internal.zzih*/);
              public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
              public create(param0: java.lang.Class<any>, param1: androidx.lifecycle.viewmodel.CreationExtras): androidx.lifecycle.ViewModel;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzic {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzic>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzid {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzid>;
              public onCleared(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzie {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzie>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzif {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzif>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzig {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzig>;
              public static CREATOR: any /* globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.internal.zzig>*/;
              public constructor(param0: any /* com.google.android.libraries.places.internal.zzhh*/, param1: com.google.android.libraries.places.widget.model.AutocompleteActivityMode, param2: string, param3: any /* com.google.android.libraries.places.internal.zzcn*/);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzih {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzih>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzih interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: any /* com.google.android.libraries.places.internal.zzig*/): void });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzii extends com.google.android.libraries.places.internal.zzih {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzii>;
              public constructor(param0: any /* com.google.android.libraries.places.internal.zzgv*/, param1: any /* com.google.android.libraries.places.internal.zzgr*/);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzij {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzij>;
              public constructor();
              public remove(): void;
              public hasNext(): boolean;
              public next(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzik extends com.google.android.libraries.places.internal.zzio {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzik>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzil extends com.google.android.libraries.places.internal.zzik {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzil>;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzim extends com.google.android.libraries.places.internal.zzik {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzim>;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzin extends com.google.android.libraries.places.internal.zzim {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzin>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzio {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzio>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzip {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzip>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zziq extends com.google.android.libraries.places.internal.zzit {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zziq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzir {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzir>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzis {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzis>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzit {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzit>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zziu extends com.google.android.libraries.places.internal.zzip {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zziu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zziv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zziv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zziw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zziw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzix {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzix>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zziy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zziy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zziz extends com.google.android.libraries.places.internal.zzjb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zziz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzj extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzja {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzja>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzjb extends com.google.android.libraries.places.internal.zzij {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjb>;
              public constructor();
              public constructor(param0: any /* com.google.android.libraries.places.internal.zzjc*/, param1: string);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzje extends com.google.android.libraries.places.internal.zzko {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzje>;
              public constructor();
              public previousIndex(): number;
              public previous(): any;
              public constructor(param0: number, param1: number);
              public nextIndex(): number;
              public hasNext(): boolean;
              public hasPrevious(): boolean;
              public next(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjg extends com.google.android.libraries.places.internal.zzkb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg>;
              public compare(param0: any, param1: any): number;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjh extends com.google.android.libraries.places.internal.zzjl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjh>;
              public hashCode(): number;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzji extends com.google.android.libraries.places.internal.zzjl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzji>;
              public hashCode(): number;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjj extends com.google.android.libraries.places.internal.zzjl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjj>;
              public hashCode(): number;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjk extends com.google.android.libraries.places.internal.zzjl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjk>;
              public hashCode(): number;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzjl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjl>;
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzjn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjn>;
              public contains(param0: any): boolean;
              /** @deprecated */
              public addAll(param0: java.util.Collection<any>): boolean;
              /** @deprecated */
              public add(param0: any): boolean;
              /** @deprecated */
              public remove(param0: any): boolean;
              /** @deprecated */
              public clear(): void;
              public toArray(): androidNative.Array<any>;
              /** @deprecated */
              public removeAll(param0: java.util.Collection<any>): boolean;
              public toArray(param0: androidNative.Array<any>): androidNative.Array<any>;
              /** @deprecated */
              public retainAll(param0: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjo extends com.google.android.libraries.places.internal.zzje {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjp extends com.google.android.libraries.places.internal.zzjq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjp>;
              public size(): number;
              public get(param0: number): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzjq extends com.google.android.libraries.places.internal.zzjn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjq>;
              public contains(param0: any): boolean;
              /** @deprecated */
              public addAll(param0: java.util.Collection<any>): boolean;
              /** @deprecated */
              public add(param0: any): boolean;
              public hashCode(): number;
              public lastIndexOf(param0: any): number;
              /** @deprecated */
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
              /** @deprecated */
              public remove(param0: any): boolean;
              /** @deprecated */
              public remove(param0: number): any;
              public indexOf(param0: any): number;
              /** @deprecated */
              public add(param0: number, param1: any): void;
              public equals(param0: any): boolean;
              /** @deprecated */
              public set(param0: number, param1: any): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjs {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjs>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzjt {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjt>;
              public get(param0: any): any;
              public hashCode(): number;
              public containsKey(param0: any): boolean;
              public getOrDefault(param0: any, param1: any): any;
              /** @deprecated */
              public put(param0: any, param1: any): any;
              /** @deprecated */
              public remove(param0: any): any;
              /** @deprecated */
              public clear(): void;
              public toString(): string;
              /** @deprecated */
              public putAll(param0: java.util.Map<any, any>): void;
              public equals(param0: any): boolean;
              public isEmpty(): boolean;
              public containsValue(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzju extends com.google.android.libraries.places.internal.zzjn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzju>;
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjv extends com.google.android.libraries.places.internal.zzkm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjw>;
              public remove(param0: number): any;
              public size(): number;
              public listIterator(param0: number): java.util.ListIterator<any>;
              public get(param0: number): any;
              public clear(): void;
              public iterator(): java.util.Iterator<any>;
              public isEmpty(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjx extends com.google.android.libraries.places.internal.zzkm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjy>;
              public size(): number;
              public listIterator(param0: number): java.util.ListIterator<any>;
              public clear(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzjz {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzk extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzka {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzka>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzkb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkb>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkc extends com.google.android.libraries.places.internal.zzkd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzke extends com.google.android.libraries.places.internal.zzjq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzke>;
              public size(): number;
              public get(param0: number): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkf extends com.google.android.libraries.places.internal.zzjq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkf>;
              public size(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkg extends com.google.android.libraries.places.internal.zzju {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkg>;
              public contains(param0: any): boolean;
              public size(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkh extends com.google.android.libraries.places.internal.zzju {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkh>;
              public contains(param0: any): boolean;
              public size(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzki extends com.google.android.libraries.places.internal.zzjq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzki>;
              public size(): number;
              public get(param0: number): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkj extends com.google.android.libraries.places.internal.zzjt {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkj>;
              public get(param0: any): any;
              public size(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzkl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkl>;
              public remove(): void;
              public hasNext(): boolean;
              public next(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzkm extends com.google.android.libraries.places.internal.zzkl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkm>;
              public set(param0: any): void;
              public previousIndex(): number;
              public add(param0: any): void;
              public previous(): any;
              public nextIndex(): number;
              public hasPrevious(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzkn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkn>;
              public constructor();
              /** @deprecated */
              public remove(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzko extends com.google.android.libraries.places.internal.zzkn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzko>;
              public constructor();
              /** @deprecated */
              public add(param0: any): void;
              /** @deprecated */
              public set(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkp>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkq extends com.google.android.libraries.places.internal.zzkv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkr extends com.google.android.libraries.places.internal.zzkv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzks {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzks>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkt extends com.google.android.libraries.places.internal.zzku {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzku {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzku>;
              public constructor();
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkv>;
              public constructor(param0: string, param1: java.lang.Class<any>, param2: boolean);
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkw>;
              public static values(): any /* androidNative.Array<com.google.android.libraries.places.internal.zzkw>*/;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkx>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzkx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { <clinit>(): void });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzky {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzky>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzkz extends com.google.android.libraries.places.internal.zzla {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzl extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzla {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzla>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlb extends com.google.android.libraries.places.internal.zzli {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlc extends com.google.android.libraries.places.internal.zzlh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzld {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzld>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzle {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzle>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlg extends com.google.android.libraries.places.internal.zzlj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlh>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzlh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzli {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzli>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzli interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {});
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlj>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlk extends com.google.android.libraries.places.internal.zzli {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzll extends com.google.android.libraries.places.internal.zzlh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzll>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzln {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzln>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzlo {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlo>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzlp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlp>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zzlr extends com.google.android.libraries.places.internal.zzky {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlr>;
              public constructor();
              public constructor(param0: string);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzls extends com.google.android.libraries.places.internal.zzlt {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzls>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlt {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlt>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzlt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: string): any /* com.google.android.libraries.places.internal.zzky*/ });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlu extends com.google.android.libraries.places.internal.zzlp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlu>;
              public constructor();
            }
            export module zzlu {
              export class zza {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlu.zza>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlx extends com.google.android.libraries.places.internal.zzlr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzly extends com.google.android.libraries.places.internal.zzmd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzly>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzlz extends com.google.android.libraries.places.internal.zzlt {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlz>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzm extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzma extends com.google.android.libraries.places.internal.zzlr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzma>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmc extends com.google.android.libraries.places.internal.zzlr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmd>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzme {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzme>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmf extends com.google.android.libraries.places.internal.zzmh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmf>;
              public close(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmg extends com.google.android.libraries.places.internal.zzmd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmg>;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmh>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmi>;
              public compare(param0: any, param1: any): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzml {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzml>;
              public compare(param0: any, param1: any): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmm>;
              public remove(): void;
              public hasNext(): boolean;
              public next(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmn>;
              public contains(param0: any): boolean;
              public size(): number;
              public iterator(): java.util.Iterator<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmo {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmo>;
              public hashCode(): number;
              public entrySet(): java.util.Set<any>;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmp>;
              public static values(): any /* androidNative.Array<com.google.android.libraries.places.internal.zzmp>*/;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmq>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzms {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzms>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmt {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmu>;
              public constructor();
              public close(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmv>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.zzmv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { zza(param0: java.lang.Class<any>, param1: number): java.lang.StackTraceElement });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmw extends com.google.android.libraries.places.internal.zzmv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmx>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmy extends com.google.android.libraries.places.internal.zzna {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzmz extends com.google.android.libraries.places.internal.zzna {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzn extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzna extends com.google.android.libraries.places.internal.zznb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzna>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class zznb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznd extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzne extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzne>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznf extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzng {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzng>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznh extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzni extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzni>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznj extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznk extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznl extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznm extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzno extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzno>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznp extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznq extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznr extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzns extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzns>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznt extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznu extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznv extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznw extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznx extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzny extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzny>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zznz extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zznz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzo extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzoa extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzob extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzob>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzoc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzod extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzod>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzoe extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoe>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzof extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzof>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzog extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzog>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzoh extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzoi extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzoj extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzok extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzok>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzol extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzol>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzom extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzom>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzon extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzon>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzoo extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzop extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzop>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzoq extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzor extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzor>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzos {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzos>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzot extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzot>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzou extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzou>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzov {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzov>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzow extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzow>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzox extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzox>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzoy extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzoz extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzp extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpa extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpb extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpc extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpd extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpe {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpe>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpf extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpg extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzph extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzph>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpi extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpj extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpk extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpl extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpm extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpn extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpo {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpp extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpq extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpr extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzps extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzps>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpt extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpu extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpv extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpw extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpy extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzpz extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzq extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqa extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqb extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqc extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqd extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqe extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqe>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqg extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqh extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqi extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqj extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqk extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzql extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzql>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqm extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqn extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqo {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqp extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqq extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqr extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqs extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqs>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqt {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqu extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqv extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqw extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqx extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqy extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzqz extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzr extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzra extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzra>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrb extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrc extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrd extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzre extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzre>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrf extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrg extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrh extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzri {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzri>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrj extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrk extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrl extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrm extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrn extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzro extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzro>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrp extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrq extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrr extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrs extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrs>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrt extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzru extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzru>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrv extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrw extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrx extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzry extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzry>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzrz extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzs extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzs>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsa extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsb extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsc extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsd extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzse extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzse>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsf extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsg extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsh extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsi extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsj extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsk extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsl extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsm extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsn extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzso extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzso>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsp extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsq extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsr extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzss extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzss>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzst extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzst>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsu extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsv extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsw extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsx extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsy extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzsz extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzt extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzta extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzta>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztb extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztc extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztd extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzte extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzte>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztf extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztg extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzth extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzth>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzti extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzti>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztj extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztk extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztl extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztm extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztn extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzto {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzto>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztp extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztq extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztr extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzts extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzts>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztt extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztu extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztv extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztw extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztx extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzty extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzty>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zztz extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zztz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzu extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzua extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzua>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzub extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzub>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuc extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzud extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzud>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzue extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzue>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuf extends com.google.android.libraries.places.internal.zzagf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzug extends com.google.android.libraries.places.internal.zzagf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzug>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuh extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzui extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzui>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuj extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuk extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzul extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzul>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzum extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzum>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzun extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzun>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuo extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzup extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzup>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuq extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzur extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzur>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzus extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzus>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzut extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzut>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuu extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuv extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuw extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzux extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzux>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuy extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzuz extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzuz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzv extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzva extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzva>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvb extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvc extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvd extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzve {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzve>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvf extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvg extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvh extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvj extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvk extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvm extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvn extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvo extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvp extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvq extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvr extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvs extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvs>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvt extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvu extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvv extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvw extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvx extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvy extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzvz extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzvz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzw extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwa extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwb extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwc extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwd extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwe extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwe>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwf extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwg extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwh extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwi extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwj extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwk extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwl extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwm extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwn extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwo extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwp extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwq extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwr extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzws extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzws>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwt extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwu extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwv extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzww extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzww>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwx extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwy extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzwz extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzwz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzx extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxa extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxa>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxb extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxc extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxd extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxe extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxe>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxf extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxg extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxh extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxi extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxj extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxk extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxl extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxm extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxn extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxo extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxp extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxq extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxr extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxs extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxs>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxt extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxu extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxv extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxw extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxx extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxy extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzxz extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzxz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzy {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzya {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzya>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyb extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyc extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyd extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzye extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzye>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyf extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyg extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyh extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyi extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyj extends com.google.android.libraries.places.internal.zzagf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyk extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyl extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzym extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzym>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyn extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyo extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyp extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyq extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyr extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzys extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzys>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyt extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyu extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyv extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyw extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyx extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyy extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzyz extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzyz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzz extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzza extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzza>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzb extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzc extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzc>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzd extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzze extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzze>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzf extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzg extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzg>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzh extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzh>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzi extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzj extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzk extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzk>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzl extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzm extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzm>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzn extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzo extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzo>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzp extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzq extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzq>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzr extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzs extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzs>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzt extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzt>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzu extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzu>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzv extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzw extends com.google.android.libraries.places.internal.zzafz<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzw>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzx extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzy extends com.google.android.libraries.places.internal.zzafw<any, any> implements com.google.android.libraries.places.internal.zzahi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class zzzz extends com.google.android.libraries.places.internal.zzagd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.zzzz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class Autocomplete {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.Autocomplete>;
              public static getStatusFromIntent(param0: globalAndroid.content.Intent): com.google.android.gms.common.api.Status;
              public static getPlaceFromIntent(param0: globalAndroid.content.Intent): com.google.android.libraries.places.api.model.Place;
            }
            export module Autocomplete {
              export class IntentBuilder {
                public static class: java.lang.Class<com.google.android.libraries.places.widget.Autocomplete.IntentBuilder>;
                public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                public constructor(param0: com.google.android.libraries.places.widget.model.AutocompleteActivityMode, param1: java.util.List<com.google.android.libraries.places.api.model.Place.Field>);
                /** @deprecated */
                public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                public setInitialQuery(param0: string): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                public build(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
                public setCountries(param0: java.util.List<string>): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                /** @deprecated */
                public setCountry(param0: string): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                public constructor(param0: any /* com.google.android.libraries.places.internal.zzhj*/);
                public setHint(param0: string): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                public setTypesFilter(param0: java.util.List<string>): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class AutocompleteActivity implements com.google.android.libraries.places.widget.listener.PlaceSelectionListener {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.AutocompleteActivity>;
              public static RESULT_ERROR: number;
              public constructor();
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public onError(param0: com.google.android.gms.common.api.Status): void;
              public onPlaceSelected(param0: com.google.android.libraries.places.api.model.Place): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class AutocompleteFragment {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.AutocompleteFragment>;
              public constructor();
              public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): void;
              public onDestroyView(): void;
              public setHint(param0: string): void;
              public setCountry(param0: string): void;
              public setOnPlaceSelectedListener(param0: com.google.android.libraries.places.widget.listener.PlaceSelectionListener): void;
              public setPlaceFields(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): void;
              public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
              public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): void;
              public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
              public setText(param0: string): void;
              public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class AutocompleteSupportFragment {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.AutocompleteSupportFragment>;
              public constructor();
              public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
              public setCountries(param0: java.util.List<string>): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              public setTypesFilter(param0: java.util.List<string>): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              public setPlaceFields(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              public setText(param0: string): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              /** @deprecated */
              public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              public setCountries(param0: androidNative.Array<string>): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              public onResume(): void;
              public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
              public setOnPlaceSelectedListener(param0: com.google.android.libraries.places.widget.listener.PlaceSelectionListener): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              public static newInstance(): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public setActivityMode(param0: com.google.android.libraries.places.widget.model.AutocompleteActivityMode): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
              public setHint(param0: string): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
              /** @deprecated */
              public setCountry(param0: string): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class AutocompleteImplFragment {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.AutocompleteImplFragment>;
                  public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
                  public onPause(): void;
                  public onResume(): void;
                  public onCreate(param0: globalAndroid.os.Bundle): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zza {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zza>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzb {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzb>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzc {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzc>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzd {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzd>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zze {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zze>;
                  public onChanged(param0: any): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzf {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzf>;
                  public handleOnBackPressed(): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzg {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzg>;
                  public onScrollStateChanged(param0: androidx.recyclerview.widget.RecyclerView, param1: number): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzh {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzh>;
                  public constructor(param0: number, param1: globalAndroid.content.Context, param2: any /* com.google.android.libraries.places.internal.zzhj*/);
                  public instantiate(param0: java.lang.ClassLoader, param1: string): androidx.fragment.app.Fragment;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzi {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzi>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzj {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzj>;
                  public afterTextChanged(param0: globalAndroid.text.Editable): void;
                  public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                  public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzk {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzk>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzl {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzl>;
                  public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzm {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzm>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzn {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzn>;
                  public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
                  public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
                  public onAnimationStart(param0: globalAndroid.animation.Animator): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzo {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzo>;
                  public animateAdd(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
                  public isRunning(): boolean;
                  public runPendingAnimations(): void;
                  public endAnimations(): void;
                  public endAnimation(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
                  public constructor(param0: globalAndroid.content.res.Resources);
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzp {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzp>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzq {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzq>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzr {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzr>;
                  public submitList(param0: java.util.List<any>): void;
                  public constructor(param0: any /* com.google.android.libraries.places.widget.internal.ui.zzb*/);
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzs {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzs>;
                  public onClick(param0: globalAndroid.view.View): void;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module internal {
              export module ui {
                export class zzt {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzt>;
                  public constructor(param0: any /* com.google.android.libraries.places.widget.internal.ui.zzb*/, param1: globalAndroid.view.View);
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module listener {
              export class PlaceSelectionListener {
                public static class: java.lang.Class<com.google.android.libraries.places.widget.listener.PlaceSelectionListener>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.widget.listener.PlaceSelectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onError(param0: com.google.android.gms.common.api.Status): void; onPlaceSelected(param0: com.google.android.libraries.places.api.model.Place): void });
                public constructor();
                public onPlaceSelected(param0: com.google.android.libraries.places.api.model.Place): void;
                public onError(param0: com.google.android.gms.common.api.Status): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module model {
              export class AutocompleteActivityMode extends globalAndroid.os.Parcelable {
                public static class: java.lang.Class<com.google.android.libraries.places.widget.model.AutocompleteActivityMode>;
                public static FULLSCREEN: com.google.android.libraries.places.widget.model.AutocompleteActivityMode;
                public static OVERLAY: com.google.android.libraries.places.widget.model.AutocompleteActivityMode;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.libraries.places.widget.model.AutocompleteActivityMode>;
                public static valueOf(param0: string): com.google.android.libraries.places.widget.model.AutocompleteActivityMode;
                public describeContents(): number;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public static values(): androidNative.Array<com.google.android.libraries.places.widget.model.AutocompleteActivityMode>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export module model {
              export class zza {
                public static class: java.lang.Class<com.google.android.libraries.places.widget.model.zza>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class zza {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.zza>;
              public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class zzb {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.zzb>;
              public onClick(param0: globalAndroid.view.View): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class zzc {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.zzc>;
              public onClick(param0: globalAndroid.view.View): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class zzd {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.zzd>;
              public onClick(param0: globalAndroid.view.View): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class zze {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.zze>;
              public onClick(param0: globalAndroid.view.View): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class zzf {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.zzf>;
              public onClick(param0: globalAndroid.view.View): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class zzg {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.zzg>;
              public onClick(param0: globalAndroid.view.View): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class zzh {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.zzh>;
              public onChanged(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module widget {
            export class zzi {
              public static class: java.lang.Class<com.google.android.libraries.places.widget.zzi>;
              public onChanged(param0: any): void;
            }
          }
        }
      }
    }
  }
}

//Generics information:
//com.google.android.libraries.places.internal.zzaeq:2
//com.google.android.libraries.places.internal.zzaer:2
//com.google.android.libraries.places.internal.zzafw:2
//com.google.android.libraries.places.internal.zzafz:2
//com.google.android.libraries.places.internal.zzahk:1
//com.google.android.libraries.places.internal.zzahs:1
//com.google.android.libraries.places.internal.zzdw:2
//com.google.android.libraries.places.internal.zzfd:2
