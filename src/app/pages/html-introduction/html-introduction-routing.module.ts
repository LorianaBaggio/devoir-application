import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlIntroductionPage } from './html-introduction.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlIntroductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlIntroductionPageRoutingModule {}
