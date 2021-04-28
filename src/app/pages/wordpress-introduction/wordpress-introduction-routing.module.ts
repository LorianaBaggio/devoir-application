import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressIntroductionPage } from './wordpress-introduction.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressIntroductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressIntroductionPageRoutingModule {}
