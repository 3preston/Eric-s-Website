import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PrivacyPageRoutingModule } from './privacy-routing.module';
import { PrivacyPage } from './privacy.page';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PrivacyPageRoutingModule,
    FormsModule,
    AngularFirestoreModule
  ],
  declarations: [PrivacyPage]
})
export class PrivacyPageModule {} 