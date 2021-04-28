import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicPartieUnePage } from './ionic-partie-une.page';

const routes: Routes = [
  {
    path: '',
    component: IonicPartieUnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicPartieUnePageRoutingModule {}
