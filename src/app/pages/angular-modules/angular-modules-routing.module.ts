import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularModulesPage } from './angular-modules.page';

const routes: Routes = [
  {
    path: '',
    component: AngularModulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularModulesPageRoutingModule {}
