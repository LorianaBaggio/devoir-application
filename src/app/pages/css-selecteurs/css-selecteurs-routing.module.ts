import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssSelecteursPage } from './css-selecteurs.page';

const routes: Routes = [
  {
    path: '',
    component: CssSelecteursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssSelecteursPageRoutingModule {}
