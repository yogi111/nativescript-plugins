import { DemoSharedBase } from '../utils';
import { GooglePlaceNs } from '@yogi/google-place-ns';

export class DemoSharedGooglePlaceNs extends DemoSharedBase {
  testIt() {
    console.log('test google-place-ns!');
    new GooglePlaceNs()
      .startAutoComplete({
        key: '',
        view: 'FULL',
        countries: 'IN',
        hint: 'Search Address/places/Cities',
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
