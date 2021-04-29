import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassIntroductionPage } from './sass-introduction.page';

const routes: Routes = [
  {
    path: '',
    component: SassIntroductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassIntroductionPageRoutingModule {}
