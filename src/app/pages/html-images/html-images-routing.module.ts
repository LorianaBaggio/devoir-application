import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlImagesPage } from './html-images.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlImagesPageRoutingModule {}
