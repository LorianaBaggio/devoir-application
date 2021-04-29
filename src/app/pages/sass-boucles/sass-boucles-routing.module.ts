import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassBouclesPage } from './sass-boucles.page';

const routes: Routes = [
  {
    path: '',
    component: SassBouclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassBouclesPageRoutingModule {}
