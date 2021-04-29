import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressInterfacePage } from './wordpress-interface.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressInterfacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressInterfacePageRoutingModule {}
