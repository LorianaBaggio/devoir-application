import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssMesuresPage } from './css-mesures.page';

const routes: Routes = [
  {
    path: '',
    component: CssMesuresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssMesuresPageRoutingModule {}
