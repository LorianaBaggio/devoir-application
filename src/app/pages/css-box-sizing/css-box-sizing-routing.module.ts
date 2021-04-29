import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssBoxSizingPage } from './css-box-sizing.page';

const routes: Routes = [
  {
    path: '',
    component: CssBoxSizingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CssBoxSizingPageRoutingModule {}
