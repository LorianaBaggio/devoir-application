import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlHeadPage } from './html-head.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlHeadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlHeadPageRoutingModule {}
