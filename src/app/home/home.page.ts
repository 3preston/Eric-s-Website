import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chosenSegment = 'web3';
  lightMode = false;

  constructor() {}

  segmentChange(chosenSegment: any) {
    this.chosenSegment = chosenSegment.detail.value;
  }

}
