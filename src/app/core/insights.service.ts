import { Injectable } from '@angular/core';
import { ApplicationInsights, IPageViewTelemetry, IEventTelemetry } from '@microsoft/applicationinsights-web';
import { environment } from './../../environments/environment';
import { ICustomProperties } from '@microsoft/applicationinsights-core-js';

@Injectable({ providedIn: 'root' })
export class InsightsService {
  private appInsights: ApplicationInsights;

  connect() {
    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey: environment.APPINSIGHTS_INSTRUMENTATIONKEY
        /* ...Other Configuration Options... */
      }
    });
    this.appInsights.loadAppInsights();
  }

  trackPageView(tel: IPageViewTelemetry) {
    const eventTelemetry: IEventTelemetry = {
      name: 'my event',
      properties: {
        a: 1,
        b: 2
      },
      measurements: {
        c: 3,
        d: 4
      }
    };
    const customProperties: ICustomProperties = { anthing: 'goes' };
    this.appInsights.trackEvent(eventTelemetry, customProperties);
    this.appInsights.trackPageView(tel);
    // throw Error('arg!');
  }
}
