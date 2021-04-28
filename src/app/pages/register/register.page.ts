import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
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
  user: UserRegister = {first_name: '', last_name: '', email: '', password: '', username: ''};

  constructor( 
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,

    private router: Router,
    private auth: AuthService,
    private toastr: ToastController,
    private loadingCtrl: LoadingController,) { }

  ngOnInit() {
  }

  async registeR() {
    if(this.user.first_name && this.user.last_name && this.user.email && this.user.username ) {
      const loading = await this.loadingCtrl.create({
        message: 'en cours...',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((data) => {
        data.user.sendEmailVerification();
        this.afs.collection('user').doc(data.user.uid).set({
          'userId': data.user.uid,
          'username': this.user.username,
          'last_name': this.user.last_name,
          'first_name': this.user.first_name,
          'email': this.user.email,
          'createdAt': Date.now()
        }).then(() => {
          loading.dismiss();
          this.toast('Inscription réussie, verifiez votre email svp', 'success');
          this.router.navigate(['/login']);
          
        })
        .catch(error => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        })
      })
      .catch(error => {
          loading.dismiss();
          this.toast(error.message, 'danger');
      })
    } else {
      this.toast("S'il vous plait completez le formulaire", 'warning')
     }
  } // fin de l'inscription

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    this.isErrorMail = (regex.test(this.user.email.trim())) ? false : true;
}

// async register() {
//   const load = await this.loadingCtrl.create({
//       message: 'Patientez svp...',
//   });
//   await load.present();
//   // this.user.username = this.user.email.split('@')[0];
//   this.auth.register(this.user).then(async(data) => {
//     console.log("success")
//       console.log(data);
//       await this.loadingCtrl.dismiss();
//       this.router.navigate(['/login']);
//   }).catch(async(err) => {
//        console.log("Test erreur");
//        console.log(err.error);
//       const toast = await this.toastr.create({
//           message: err,
//           duration: 2000
//       });
//       toast.present();
//       await this.loadingCtrl.dismiss();
//   })
// }


}
