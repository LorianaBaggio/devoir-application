import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassImbricationPage } from './sass-imbrication.page';

const routes: Routes = [
  {
    path: '',
    component: SassImbricationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassImbricationPageRoutingModule {}
