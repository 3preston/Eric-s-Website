import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxTwitterWidgetsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
