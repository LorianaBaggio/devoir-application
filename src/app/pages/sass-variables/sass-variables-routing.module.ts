import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassVariablesPage } from './sass-variables.page';

const routes: Routes = [
  {
    path: '',
    component: SassVariablesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassVariablesPageRoutingModule {}
