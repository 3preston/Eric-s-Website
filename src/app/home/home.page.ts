import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chosenSegment = 'web3';
  day = true;

  constructor() {
    const now = new Date();
    if (now.getHours() > 6) {
      this.day = true;
    } else if (now.getHours() > 21) {
      this.day = false;
    } else {
      this.day = false;
    }
  }

  segmentChange(chosenSegment: any) {
    this.chosenSegment = chosenSegment.detail.value;
  }

}
