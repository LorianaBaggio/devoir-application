import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressBlogPage } from './wordpress-blog.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressBlogPageRoutingModule {}
