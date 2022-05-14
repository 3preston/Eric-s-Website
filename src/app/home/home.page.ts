import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chosenSegment = 'web3';
  // day = true;

  constructor() {
    // const now = new Date();
    // if (now.getHours() > 6) {
    //   this.day = true;
    // } else if (now.getHours() > 21) {
    //   this.day = false;
    // } else {
    //   this.day = false;
    // }
  }

  segmentChange(chosenSegment: any) {
    this.chosenSegment = chosenSegment.detail.value;
  }

  follow() {
   window.open("https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8100%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5EericprestonETH&region=follow_link&screen_name=ericprestonETH") 
  }

}
