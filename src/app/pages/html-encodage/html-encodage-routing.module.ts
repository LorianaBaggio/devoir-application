import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlEncodagePage } from './html-encodage.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlEncodagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlEncodagePageRoutingModule {}
