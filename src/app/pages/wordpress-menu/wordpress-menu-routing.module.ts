import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressMenuPage } from './wordpress-menu.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressMenuPageRoutingModule {}
