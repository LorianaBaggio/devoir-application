import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlBodyPage } from './html-body.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlBodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlBodyPageRoutingModule {}
