import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressThemesPage } from './wordpress-themes.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressThemesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressThemesPageRoutingModule {}
