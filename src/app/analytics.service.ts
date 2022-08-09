import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { environment } from 'src/environments/environment.prod';
import { Device } from '@capacitor/device';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

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
      console.log('initran!');
    }
    

    // const app = initializeApp(environment.firebaseConfig);
    // const analytics = getAnalytics(app);
  }
  
  test() {
    FirebaseAnalytics.logEvent({
      name: 'test',
      params: {
        time: 'test'
      }
    });
    console.log('runnign');
  }

}
