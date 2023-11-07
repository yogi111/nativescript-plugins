import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGooglePlaceNs } from '@demo/shared';
import {} from '@yogi/google-place-ns';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedGooglePlaceNs {}
