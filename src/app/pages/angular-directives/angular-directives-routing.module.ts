import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularDirectivesPage } from './angular-directives.page';

const routes: Routes = [
  {
    path: '',
    component: AngularDirectivesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularDirectivesPageRoutingModule {}
