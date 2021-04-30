import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

// ENVIRONEMENT
import { environment } from '../environments/environment.prod';

// AUTH
import { AuthService } from './services/auth.service';

// AUTH GUARD
import { AuthGuard } from './guards/auth.guard';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

export const firebaseConfig = {
  apiKey: "AIzaSyDWQjLFSvk7TIdF--b57NNh5vpqttAX2jQ",
  authDomain: "edudigital-c2434.firebaseapp.com",
  projectId: "edudigital-c2434",
  storageBucket: "edudigital-c2434.appspot.com",
  messagingSenderId: "436165839252",
  appId: "1:436165839252:web:bc4fe8c5357fb58ad76781",
  measurementId: "G-V5SHTPR5QD"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule,
     AngularFireAuthModule,
     AngularFireStorageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Facebook, AuthGuard, AuthService, NativeStorage],
    bootstrap: [AppComponent],
})

export class AppModule {}
