import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chosenSegment = 'web3';
  now: Date = new Date();
  day = true;

  constructor() {
    setInterval(() => {
      this.now = new Date();
      if (this.now.getHours() > 6) {
        this.day = true;
      } else if (this.now.getHours() > 21) {
        this.day = false;
      } else {
        this.day = false;
      }
      console.log(this.day);
    }, 1);
  }

  segmentChange(chosenSegment: any) {
    this.chosenSegment = chosenSegment.detail.value;
  }

}
