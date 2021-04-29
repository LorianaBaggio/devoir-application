import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressWdigetsPage } from './wordpress-wdigets.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressWdigetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressWdigetsPageRoutingModule {}
