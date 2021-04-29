import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularDirectivesDeuxPage } from './angular-directives-deux.page';

const routes: Routes = [
  {
    path: '',
    component: AngularDirectivesDeuxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularDirectivesDeuxPageRoutingModule {}
