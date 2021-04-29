import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressAccueilPage } from './wordpress-accueil.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressAccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressAccueilPageRoutingModule {}
