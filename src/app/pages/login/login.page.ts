import { HttpClient } from '@angular/common/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FacebookLoginPlugin } from '@capacitor-community/facebook-login';
import { Plugins, registerWebPlugin } from '@capacitor/core';
import { FacebookLogin } from '@capacitor-community/facebook-login';
registerWebPlugin(FacebookLogin);

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  fbLogin: FacebookLoginPlugin;
  user = null;
  token = null;
  email: string = '';
  password: string = '';
  isErrorMail: boolean = true;

  constructor(
    private http: HttpClient,
    private fb: Facebook, 
    private toastr: ToastController,
    private router: Router,
    private auth: AuthService,
    private platform: Platform,
    private storage: NativeStorage,
    private modal: ModalController,
    private loading: LoadingController,
    public afDB: AngularFireDatabase,
    public afAuth: AngularFireAuth,
) { 
      // this.setupFbLogin();
    }

  ngOnInit() {
  }

//   async setupFbLogin() {
//     if (this.platform.is('desktop')) {
//       this.fbLogin = FacebookLogin;
//     } else {
//       // Use the native implementation inside a real app!
//       const { FacebookLogin } = Plugins;
//       this.fbLogin = FacebookLogin;
//     } 
//   }

//   async FBLogin() {
//     const FACEBOOK_PERMISSIONS = ['email', 'user_birthday'];
//     const result = await this.fbLogin.login({ permissions: FACEBOOK_PERMISSIONS });
 
//     if (result.accessToken && result.accessToken.userId) {
//       this.token = result.accessToken;
//       this.loadUserData();
//     } else if (result.accessToken && !result.accessToken.userId) {
//       // Web only gets the token but not the user ID
//       // Directly call get token to retrieve it now
//       this.getCurrentToken();
//     } else {
//       // Login failed
//     }
//   }
 
//   async getCurrentToken() {    
//     const result = await this.fbLogin.getCurrentAccessToken();
 
//     if (result.accessToken) {
//       this.token = result.accessToken;
//       this.loadUserData();
//     } else {
//       // Not logged in.
//     }
//   }
 
//   async loadUserData() {
//     const url = `https://graph.facebook.com/${this.token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${this.token.token}`;
//     this.http.get(url).subscribe(res => {
//       this.user = res;
//     });
//   }
 
//   async logout() {
//     await this.fbLogin.logout();
//     this.user = null;
//     this.token = null;
//   }

//   FacebookLogin() {

//   this.fb.login(['public_profile', 'user_friends', 'email'])
//   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
//   .catch(e => console.log('Error logging into Facebook', e));


// this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
//   };

  login() {
    if(this.email && this.password) 
    {
      this.auth.signIn(this.email, this.password); 
    } else {
      this.toast('Veuilez entrer votre email et votre mot de passe', 'warning');
    }
  }

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    // this.isErrorMail = !regex.test(this.email);
    this.isErrorMail = (regex.test(this.email.trim())) ? false : true;
}

}
