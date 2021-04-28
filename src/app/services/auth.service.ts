import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';

import { UserRegister } from '../interfaces/user-register';

// import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { switchMap }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   user$: Observable<User>;
   user : User; 

  url: string = 'http://localhost:8080/api'; // aaaaaaa@aaaaaaa.fr

  constructor(
      private http: HttpClient,
      private router: Router,
      private afs: AngularFirestore,
      private afauth: AngularFireAuth,
      private LoadingCtrl: LoadingController,
      private toastr: ToastController) {
         this.user$ = this.afauth.authState
         .pipe(
             switchMap( user => {
                 if (user) {
                     return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
                 } else {
                     return of(null);
                 }
             } )
         )
      } // fin du constructor

      async signIn(email, password) {
        const loading = await this.LoadingCtrl.create({
            message: "Authentification...",
            spinner: "crescent",
            showBackdrop: true
        });
        loading.present();

        this.afauth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL)
        .then(()=> {
            this.afauth.signInWithEmailAndPassword(email, password)
            .then((data) => {
                if(!data.user.emailVerified) {
                    loading.dismiss();
                    console.log('Ça marche pas');
                    this.toast('Verifiez votre email svp', 'warning');
                    this.afauth.signOut();
                } else {
                    loading.dismiss();
                    console.log(data);
                    this.router.navigate(['/profil']); 
                }
            })
            .catch(error => {
                console.log('Ça marche pas 1');
                loading.dismiss();
                this.toast(error.message, 'danger');
            })
        })
        .catch(error => {
            console.log('Ça marche pas 2');
            loading.dismiss();
            this.toast(error.message, 'danger'); 
        });
      } // Fin de la connexion

     async signOut() {
        const loading = await this.LoadingCtrl.create({
            spinner: 'crescent',
            showBackdrop: true
        });
        loading.present();

        this.afauth.signOut()
        .then(() => {
            loading.dismiss();
            this.router.navigate(['/login']);
        })
      } // fin de la déconnexion

      async toast(message, status) {
        const toast = await this.toastr.create({
            message: message,
            color: status,
            position: 'top',
            duration: 3000
        })
        toast.present();
      } // fin du toast 

//  async login(email: string, password: string) {
//       return new Promise((resolve, rejects) => {
//           this.http.post(this.url + '/users/login', { email: email, password: password }).subscribe((data: any) => {
//               console.log(data);
                
//                   localStorage.setItem('token', data.token);
                  
//               (!data.success) ? rejects(data): resolve(data);
              
//           });
//       });
//   }

//   register(user: UserRegister) {
//       return new Promise((resolve, rejects) => {
//           this.http.post(this.url + '/users/register', user).subscribe((data: any) => {
//             console.log(data);
//               (!data.success) ? rejects(data): resolve(data);
              
//           });
//       });
//   }

  getAuth() { 
    return this.afauth.user; 
  } 

}
// function switchMap(arg0: (user: any) => Observable<any>): import("rxjs").OperatorFunction<firebase.default.User, User> {
//     throw new Error('Function not implemented.');
// }

