import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassPage } from './sass.page';

const routes: Routes = [
  {
    path: '',
    component: SassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassPageRoutingModule {}
