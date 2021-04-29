import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlLiensPage } from './html-liens.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlLiensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlLiensPageRoutingModule {}
