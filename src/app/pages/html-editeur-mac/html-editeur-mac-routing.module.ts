import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlEditeurMacPage } from './html-editeur-mac.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlEditeurMacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlEditeurMacPageRoutingModule {}
