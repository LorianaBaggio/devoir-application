import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularRoutesPage } from './angular-routes.page';

const routes: Routes = [
  {
    path: '',
    component: AngularRoutesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutesPageRoutingModule {}
