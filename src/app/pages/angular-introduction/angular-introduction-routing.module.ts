import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularIntroductionPage } from './angular-introduction.page';

const routes: Routes = [
  {
    path: '',
    component: AngularIntroductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularIntroductionPageRoutingModule {}
