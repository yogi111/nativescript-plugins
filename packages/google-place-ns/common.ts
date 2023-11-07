export interface IAutocompleteOptions {
  key: string;
  view: 'FULL' | 'OVERLAY';
  hint: string;
  countries: string; //coma separared contry names
}
export interface IPlace {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  isoCountryCode?: string;
  country?: string;
  administrativeArea?: string;
  subAdministrativeArea?: string;
  locality?: string;
  subLocality?: string;
}

export class GooglePlaceNsCommon {
  startAutoComplete(options: IAutocompleteOptions): Promise<IPlace> {
    return Promise.reject(null);
  }
}
