import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssIntroductionPage } from './css-introduction.page';

const routes: Routes = [
  {
    path: '',
    component: CssIntroductionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssIntroductionPageRoutingModule {}
