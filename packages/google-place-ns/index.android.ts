import { Utils } from '@nativescript/core';
import { GooglePlaceNsCommon, IAutocompleteOptions, IPlace } from './common';
export class GooglePlaceNs extends GooglePlaceNsCommon {
  static REQUEST_CODE = 2234;

  startAutoComplete(options: IAutocompleteOptions): Promise<IPlace> {
    return new Promise<IPlace>((resolve, reject) => {
      const optionStr = JSON.stringify(options);
      //@ts-ignore
      const intent = new android.content.Intent(Utils.android.getCurrentActivity(), com.googleplace.GooglePlaceActivity.class);
      intent.putExtra('options', optionStr);
      (Utils.android.getCurrentActivity() as androidx.appcompat.app.AppCompatActivity).startActivityForResult(intent, GooglePlaceNs.REQUEST_CODE);
      (Utils.android.getCurrentActivity() as androidx.appcompat.app.AppCompatActivity).onActivityResult = (reqCode: number, resultCode: number, intent: android.content.Intent) => {
        if (reqCode === GooglePlaceNs.REQUEST_CODE) {
          if (resultCode === androidx.appcompat.app.AppCompatActivity.RESULT_OK) {
            const responseStr = intent.getStringExtra('response');
            try {
              const response: IPlace = JSON.parse(responseStr);
              resolve(response);
            } catch (error) {
              reject(error);
            }
          } else if (resultCode === androidx.appcompat.app.AppCompatActivity.RESULT_CANCELED) {
            const errorStr = intent.getStringExtra('error');
            try {
              const error: any = JSON.parse(errorStr);
              reject(error);
            } catch (error) {
              reject(error);
            }
          }
        }
      };
    });
  }
}
