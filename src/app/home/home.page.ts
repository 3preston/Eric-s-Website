import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AnalyticsService } from '../analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chosenSegment = 'web3';

  constructor(private analytics: AnalyticsService,
              private firestore: AngularFirestore,
              private toast: ToastController) {}

  segmentChange(chosenSegment: any) {
    this.chosenSegment = chosenSegment.detail.value;
  }

  follow() {
    window.open("https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8100%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5EericprestonETH&region=follow_link&screen_name=ericprestonETH") 
  }

  email() {
   window.location.href = "mailto:eric@fairmint.co?subject=Website Contact - &body=Hello Eric,"; 
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

  test() {
    this.analytics.test();
  }

  //crypto not yet working see following websites///
  // https://docs.ethers.io/v5/api/providers/api-providers/
  // https://blog.chain.link/how-to-display-crypto-and-fiat-prices-on-a-frontend/
  // https://docs.alchemy.com/alchemy/apis/ethereum
  // https://www.youtube.com/watch?v=cqdAQK7WOlE
  // https://www.joshmorony.com/building-a-cryptocurrency-price-tracker-pwa-in-ionic/
  //

}
