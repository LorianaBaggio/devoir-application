import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassHeritagePage } from './sass-heritage.page';

const routes: Routes = [
  {
    path: '',
    component: SassHeritagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassHeritagePageRoutingModule {}
