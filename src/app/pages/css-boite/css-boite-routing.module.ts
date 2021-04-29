import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssBoitePage } from './css-boite.page';

const routes: Routes = [
  {
    path: '',
    component: CssBoitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssBoitePageRoutingModule {}
