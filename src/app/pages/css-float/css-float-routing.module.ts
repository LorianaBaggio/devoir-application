import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssFloatPage } from './css-float.page';

const routes: Routes = [
  {
    path: '',
    component: CssFloatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssFloatPageRoutingModule {}
