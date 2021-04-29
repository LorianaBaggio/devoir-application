import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassMixinsPage } from './sass-mixins.page';

const routes: Routes = [
  {
    path: '',
    component: SassMixinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassMixinsPageRoutingModule {}
