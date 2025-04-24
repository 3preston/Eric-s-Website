import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: 'privacy.page.html',
  styleUrls: ['privacy.page.scss'],
})
export class PrivacyPage {

  constructor(
    private toast: ToastController,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  email() {
    window.location.href = "mailto:eric@ericpreston.xyz?subject=Website Contact &body=Hello Start to Finish Law,";
  }

  scrollToContact() {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  privacy() {
    this.router.navigate(['/privacy']);
  }

  terms() {
    this.router.navigate(['/terms']);
  }

  routeHome() {
    this.router.navigate(['/home']);
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
} 