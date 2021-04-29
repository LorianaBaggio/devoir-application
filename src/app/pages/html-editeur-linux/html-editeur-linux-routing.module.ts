import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlEditeurLinuxPage } from './html-editeur-linux.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlEditeurLinuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlEditeurLinuxPageRoutingModule {}
