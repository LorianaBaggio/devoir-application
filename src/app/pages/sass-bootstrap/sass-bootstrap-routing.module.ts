import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassBootstrapPage } from './sass-bootstrap.page';

const routes: Routes = [
  {
    path: '',
    component: SassBootstrapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassBootstrapPageRoutingModule {}
