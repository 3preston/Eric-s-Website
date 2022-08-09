import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { environment } from 'src/environments/environment.prod';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() {
    this.initFB();
  }

  async initFB() {
    if ((await Device.getInfo()).platform == 'web') {
      FirebaseAnalytics.initializeFirebase(environment.firebaseConfig);
    }
  }
  
  segmentChanged(segment: any) {
    FirebaseAnalytics.logEvent({
      name: 'segment_changed',
      params: {
        segment: segment
      }
    });
  }

  socialClicked(socialClicked: any) {
    FirebaseAnalytics.logEvent({
      name: 'social_clicked',
      params: {
        social_clicked: socialClicked
      }
    });
  }

}
