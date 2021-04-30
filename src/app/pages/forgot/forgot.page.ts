import { UserRegister } from './../../interfaces/user-register';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

email: string = '';
isErrorMail: boolean = true;

  constructor( 
    private router: Router,
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private LoadingCtrl: LoadingController,
    private toastr: ToastController) { }
  
  user: UserRegister = {first_name: '', last_name: '', email: '', password: '', username: '', confirm_password: '', phone: '' };

  

  ngOnInit() {
  }

  resetPassword () {
    if (! this.email) { 
      this.toast("Entrez votre email", 'success'); 
    }

    this.afauth.sendPasswordResetEmail(this.email, 
      {url: 'https://edudigital-c2434.firebaseapp.com/__/auth/action'}
      )
      .then(() => {
        this.toast('Email de réinitialisation envoyé', 'success');
        this.router.navigate(['/login']);
        
      })
      .catch((error) => 
      this.toast(error.message, 'danger'))
  }
  async toast(message, status) {
    const toast = await this.toastr.create({
        message: message,
        color: status,
        position: 'top',
        duration: 3000
    })
    toast.present();
  }
  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    this.isErrorMail = (regex.test(this.email.trim())) ? false : true;
}

}
