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
  twitterLoading = true;

  constructor(private analytics: AnalyticsService,
    private firestore: AngularFirestore,
    private toast: ToastController) { }

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
