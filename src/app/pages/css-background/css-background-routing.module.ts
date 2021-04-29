import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssBackgroundPage } from './css-background.page';

const routes: Routes = [
  {
    path: '',
    component: CssBackgroundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssBackgroundPageRoutingModule {}
