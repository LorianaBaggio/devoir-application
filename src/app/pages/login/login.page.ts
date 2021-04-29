import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
 import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  isErrorMail: boolean = true;

  constructor( 
    private toastr: ToastController,
    private router: Router,
    private auth: AuthService,
    private platform: Platform,
    private storage: NativeStorage,
    private modal: ModalController,
    private loading: LoadingController) { }

  ngOnInit() {
  }

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

// async loginForm() {
//   const load = await this.loading.create({
//       message: 'Patientez svp...',
//   });
//   await load.present();
//   this.auth.login(this.email, this.password).then(async(user: any) => {
//       // console.log(user);
//       console.log("test bon")
//       console.log(this.platform.platforms());
//       if (this.platform.is("desktop")) {
//           localStorage.setItem('token', user.token)
//           localStorage.setItem('user', JSON.stringify(user.user))
//       } else {
//           await this.storage.setItem('token', user.token)
//           await this.storage.setItem('user', JSON.stringify(user.user))
//       }
//        this.router.navigate(['/register'])
//       await this.loading.dismiss();
     

//   }).catch(async() => {
//       this.email = ''
//       this.password = ''
//       this.isErrorMail = true;
//       console.log("test erreur")
//       await this.loading.dismiss();
//   })
// }


}
