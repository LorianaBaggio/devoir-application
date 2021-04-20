import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { UserRegister } from '../../interfaces/user-register';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isErrorMail: boolean = true;
  isErrorPhone: boolean = true;
  user: UserRegister = {first_name: '', last_name: '', email: '', password: '', username: '', confirm_password: '' };

  constructor( 
    private router: Router,
    private auth: AuthService,
    private toast: ToastController,
    private loading: LoadingController,) { }

  ngOnInit() {
  }

  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    this.isErrorMail = (regex.test(this.user.email.trim())) ? false : true;
}

async register() {
  const load = await this.loading.create({
      message: 'Please wait...',
  });
  await load.present();
  // this.user.username = this.user.email.split('@')[0];
  this.auth.register(this.user).then(async(data) => {
      console.log(data);
      await this.loading.dismiss();
      this.router.navigate(['/login']);
  }).catch(async(err) => {
      console.log("error")
      console.log(err.HttpErrorResponse.error);
      const toast = await this.toast.create({
          message: err,
          duration: 2000
      });
      toast.present();
      await this.loading.dismiss();
  })
}


}
