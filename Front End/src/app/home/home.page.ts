import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AnalyticsService } from '../analytics.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private router: Router,
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

  email() {
    window.location.href = "mailto:prest114@msu.edu?subject=Website Contact - &body=Hello Eric,";
  }

  async contactSubmit(form: NgForm) {
    try {
      const contact = {
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
        date: new Date()
      };
      
      await this.firestore.collection('contact').add(contact);
      
      const toast = await this.toast.create({
        header: 'Message Received!',
        message: 'Watch Out For a Reply',
        duration: 5500,
        position: 'top',
        color: 'success'
      });
      
      await toast.present();
      form.resetForm();
      
    } catch (error) {
      console.error('Error submitting contact form:', error);
      const toast = await this.toast.create({
        header: 'Error',
        message: 'Failed to send message. Please try again later or try email instead.',
        duration: 3000,
        position: 'middle',
        color: 'danger'
      });
      await toast.present();
    }
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

  privacy() {
    this.router.navigate(['/privacy']);
  }

}
