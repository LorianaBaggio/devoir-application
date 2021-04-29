import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularPromessesPage } from './angular-promesses.page';

const routes: Routes = [
  {
    path: '',
    component: AngularPromessesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularPromessesPageRoutingModule {}
