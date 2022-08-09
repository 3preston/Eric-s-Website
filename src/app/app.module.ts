import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
<<<<<<< HEAD
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
=======
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
>>>>>>> 0d34f9c75cb703554c35459d725fdc8c3178f208



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
<<<<<<< HEAD
    AngularFirestoreModule,
=======
    provideAnalytics(() => getAnalytics())
>>>>>>> 0d34f9c75cb703554c35459d725fdc8c3178f208
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
