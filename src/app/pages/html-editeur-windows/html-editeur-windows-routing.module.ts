import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlEditeurWindowsPage } from './html-editeur-windows.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlEditeurWindowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlEditeurWindowsPageRoutingModule {}
