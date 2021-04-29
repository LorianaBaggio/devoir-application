import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssCouleursPage } from './css-couleurs.page';

const routes: Routes = [
  {
    path: '',
    component: CssCouleursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssCouleursPageRoutingModule {}
