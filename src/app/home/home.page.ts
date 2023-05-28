import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AnalyticsService } from '../analytics.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  chosenSegment: string = 'web3';
  twitterLoading: boolean = true;
  cryptoPrices = {};

  constructor(private analytics: AnalyticsService,
    private firestore: AngularFirestore,
    private http: HttpClient,
    private toast: ToastController) { }

  ngOnInit() {
    this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,optimism,bitcoin,cosmos&vs_currencies=usd')
      .subscribe((response: any) => {
        const cryptoPrices = {
          'eth': response.ethereum.usd,
          'op': response.optimism.usd,
          'btc': response.bitcoin.usd,
          'atom': response.cosmos.usd,
        };
        this.cryptoPrices = cryptoPrices;
        console.log(this.cryptoPrices);
      });
  }

  segmentChange(chosenSegment: any) {
    this.chosenSegment = chosenSegment.detail.value;
  }

  follow() {
    window.open("https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8100%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5EericprestonETH&region=follow_link&screen_name=ericprestonETH")
  }

  email() {
    window.location.href = "mailto:prest114@msu.edu?subject=Website Contact - &body=Hello Eric,";
  }

  contactSubmit(form: NgForm) {
    const contact = {
      email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
      date: new Date()
    }
    this.firestore.collection('contact').add(contact).then(() => {
      const toast: any = this.toast.create({
        header: 'Message Recieved!',
        message: 'Watch Out For a Reply',
        duration: 5500,
        position: 'top',
        color: 'success'
      }).then((toastEl) => {
        toastEl.present();
      });
    });
  }

  analyticsSegment(segment: any) {
    this.analytics.segmentChanged(segment);
  }

  analyticsSocial(socialClicked: any) {
    this.analytics.socialClicked(socialClicked);
  }

  analyticsTechClicked(tech: any) {
    this.analytics.techClicked(tech);
  }

  analyticsTwitterFollow() {
    this.analytics.twitterFollow();
  }

  onLoad() {
    this.twitterLoading = false;
  }

}
