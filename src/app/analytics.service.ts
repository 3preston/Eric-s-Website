import { Injectable } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { Device } from '@capacitor/device';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(public analytics: AngularFireAnalytics) {}

  test() {
    this.analytics.logEvent('tech_segment', { test: 'test', test2: 'test2' });
  }

}
