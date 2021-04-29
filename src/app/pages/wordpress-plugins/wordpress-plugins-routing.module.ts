import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressPluginsPage } from './wordpress-plugins.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressPluginsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressPluginsPageRoutingModule {}
