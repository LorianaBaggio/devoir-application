import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../../interfaces/user-register';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  isErrorMail: boolean = true;  
  user: UserRegister = {first_name: '', last_name: '', email: '', password: '', username: '', confirm_password: '' };

  constructor() { }

  ngOnInit() {
  }

  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    this.isErrorMail = (regex.test(this.user.email.trim())) ? false : true;
}

}
