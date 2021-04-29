import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssTextesPage } from './css-textes.page';

const routes: Routes = [
  {
    path: '',
    component: CssTextesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssTextesPageRoutingModule {}
