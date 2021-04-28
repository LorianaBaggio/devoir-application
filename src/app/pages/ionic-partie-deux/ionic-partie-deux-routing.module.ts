import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicPartieDeuxPage } from './ionic-partie-deux.page';

const routes: Routes = [
  {
    path: '',
    component: IonicPartieDeuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicPartieDeuxPageRoutingModule {}
