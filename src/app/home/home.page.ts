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
  // day = true;

  constructor() {
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

  //

  // async getCrypto() {
  //   const aggregatorV3InterfaceABI = [
  //       {
  //           inputs: [],
  //           name: 'decimals',
  //           outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
  //           stateMutability: 'view',
  //           type: 'function'
  //       },
  //       {
  //           inputs: [],
  //           name: 'description',
  //           outputs: [{ internalType: 'string', name: '', type: 'string' }],
  //           stateMutability: 'view',
  //           type: 'function'
  //       },
  //       {
  //           inputs: [{ internalType: 'uint80', name: '_roundId', type: 'uint80' }],
  //           name: 'getRoundData',
  //           outputs: [
  //               { internalType: 'uint80', name: 'roundId', type: 'uint80' },
  //               { internalType: 'int256', name: 'answer', type: 'int256' },
  //               { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
  //               { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
  //               { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' }
  //           ],
  //           stateMutability: 'view',
  //           type: 'function'
  //       },
  //       {
  //           inputs: [],
  //           name: 'latestRoundData',
  //           outputs: [
  //               { internalType: 'uint80', name: 'roundId', type: 'uint80' },
  //               { internalType: 'int256', name: 'answer', type: 'int256' },
  //               { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
  //               { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
  //               { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' }
  //           ],
  //           stateMutability: 'view',
  //           type: 'function'
  //       },
  //       {
  //           inputs: [],
  //           name: 'version',
  //           outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  //           stateMutability: 'view',
  //           type: 'function'
  //       }
  //   ];
  //   const provider = new ethers.providers.JsonRpcProvider(this.url);
  //   const address = '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e';
  //   const priceFeed = new ethers.Contract(address, aggregatorV3InterfaceABI, provider);
  //   let roundData = await priceFeed.latestRoundData();
  //   let decimals = await priceFeed.decimals();
  //   console.log(roundData);
  //   console.log(decimals);
  // }

}
