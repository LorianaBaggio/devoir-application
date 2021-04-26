import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
 import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  pass: string = '';
  isErrorMail: boolean = true;

  constructor( private router: Router,
    private auth: AuthService,
    private platform: Platform,
    private storage: NativeStorage,
    private modal: ModalController,
    private loading: LoadingController) { }

  ngOnInit() {
  }

  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    // this.isErrorMail = !regex.test(this.email);
    this.isErrorMail = (regex.test(this.email.trim())) ? false : true;
}

async loginForm() {
  const load = await this.loading.create({
      message: 'Patientez svp...',
  });
  await load.present();
  this.auth.login(this.email, this.pass).then(async(user: any) => {
      // console.log(user);
      console.log("test bon")
      console.log(this.platform.platforms());
      if (this.platform.is("desktop")) {
          localStorage.setItem('token', user.token)
          localStorage.setItem('user', JSON.stringify(user.user))
      } else {
          await this.storage.setItem('token', user.token)
          await this.storage.setItem('user', JSON.stringify(user.user))
      }
       this.router.navigate(['/register'])
      await this.loading.dismiss();
     

  }).catch(async() => {
      this.email = ''
      this.pass = ''
      this.isErrorMail = true;
      console.log("test erreur")
      await this.loading.dismiss();
  })
}


}
