import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  user: any;
  
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })
  }

}
