import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.page.html',
  styleUrls: ['./profil-edit.page.scss'],
})
export class ProfilEditPage implements OnInit {

  userId: string;
  last_name: string;
  first_name: string;
  username: string;
  phone: string;
  email: string;
  

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.userId = user.userId;
      this.last_name = user.last_name;
      this.first_name = user.first_name;
      this.username = user.username;
      this.phone = user.phone;
      this.email = user.email;
    })
  }
  
  Test() {
    console.log("test");
  }

  async updateProfil() {
    console.log("test");
    const loading = await this.loadingCtrl.create({
      message: 'Modification...',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();
    this.afs.collection('user').doc(this.userId).set({
      
      'username': this.username,
      'last_name': this.last_name,
      'first_name': this.first_name,
      'email': this.email,
      'phone': this.phone,
      'editAt': Date.now()
    }).then(() => {
      
      loading.dismiss();
      this.toast('Modification réussie','success');
      this.router.navigate(['/profil'])
    })
    .catch(error => {
      this.toast(error.message, 'danger');
    })
  }

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
