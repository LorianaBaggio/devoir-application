import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularApplyWatchDigestPageRoutingModule } from './angular-apply-watch-digest-routing.module';

import { AngularApplyWatchDigestPage } from './angular-apply-watch-digest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularApplyWatchDigestPageRoutingModule
  ],
  declarations: [AngularApplyWatchDigestPage]
})
export class AngularApplyWatchDigestPageModule {}
