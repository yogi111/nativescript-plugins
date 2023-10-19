import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPaytmAllInOneNs } from '@demo/shared';
import {} from '@yogi/paytm-all-in-one-ns';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPaytmAllInOneNs {}
