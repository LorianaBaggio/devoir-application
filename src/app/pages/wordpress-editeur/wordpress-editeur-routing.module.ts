import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressEditeurPage } from './wordpress-editeur.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressEditeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressEditeurPageRoutingModule {}
