import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { environment } from 'src/environments/environment.prod';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() {
    FirebaseAnalytics.initializeFirebase(environment.firebase);
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

  fairmintClick(baseOrLegal: any) {
    FirebaseAnalytics.logEvent({
      name: 'fairmint_clicked',
      params: {
        base_or_legal: baseOrLegal
      }
    });
  }

  techClicked(techClicked: any) {
    FirebaseAnalytics.logEvent({
      name: 'tech_clicked',
      params: {
        tech_clicked: techClicked
      }
    });
  }
  
  twitterFollow() {
    FirebaseAnalytics.logEvent({
      name: 'twitter_follow',
      params: {}
    });
  }

  contactFormUsed() {
    FirebaseAnalytics.logEvent({
      name: 'contact_form',
      params: {}
    });
  }

}
