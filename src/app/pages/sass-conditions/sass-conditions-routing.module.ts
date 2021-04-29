import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassConditionsPage } from './sass-conditions.page';

const routes: Routes = [
  {
    path: '',
    component: SassConditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassConditionsPageRoutingModule {}
