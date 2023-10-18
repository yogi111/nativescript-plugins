import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedRazorpayNs } from '@demo/shared';
import {} from '@yogi/razorpay-ns';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedRazorpayNs {}
