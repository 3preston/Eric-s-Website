import { Component } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chosenSegment = 'web3';
  url = 'https://eth-mainnet.alchemyapi.io/v2/YmeZsqpToFAPipiEZhCItRKfxYcqGhFk'
  provider = new ethers.providers.AlchemyProvider('kovan', 'YmeZsqpToFAPipiEZhCItRKfxYcqGhFk');
  // day = true;

  constructor() {
    const provider = new ethers.providers.JsonRpcProvider();
    const signer = provider.getSigner();
    // this.getCrypto();
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

  //crypto not yet working see following websites///
  // https://docs.ethers.io/v5/api/providers/api-providers/
  // https://blog.chain.link/how-to-display-crypto-and-fiat-prices-on-a-frontend/
  // https://docs.alchemy.com/alchemy/apis/ethereum
  // https://www.youtube.com/watch?v=cqdAQK7WOlE
  // https://www.joshmorony.com/building-a-cryptocurrency-price-tracker-pwa-in-ionic/

  //

  async getCrypto() {
   //need ABI
  }

}
