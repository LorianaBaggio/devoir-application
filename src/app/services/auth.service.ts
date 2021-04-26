import { Injectable } from '@angular/core';

import { UserRegister } from '../interfaces/user-register';

// import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:8080/api'; // aaaaaaa@aaaaaaa.fr

  constructor(private http: HttpClient, private router: Router) {}

 async login(email: string, password: string) {
      return new Promise((resolve, rejects) => {
          this.http.post(this.url + '/users/login', { email: email, password: password }).subscribe((data: any) => {
              console.log(data);
                
                  localStorage.setItem('token', data.token);
                  
              (!data.success) ? rejects(data): resolve(data);
              
          });
      });
  }

  register(user: UserRegister) {
      return new Promise((resolve, rejects) => {
          this.http.post(this.url + '/users/register', user).subscribe((data: any) => {
            console.log(data);
              (!data.success) ? rejects(data): resolve(data);
              
          });
      });
  }

  getProfile() {
      return this.http.get(this.url + '/profil');
  }
}
