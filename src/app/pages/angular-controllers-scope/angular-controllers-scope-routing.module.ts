import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularControllersScopePage } from './angular-controllers-scope.page';

const routes: Routes = [
  {
    path: '',
    component: AngularControllersScopePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularControllersScopePageRoutingModule {}
