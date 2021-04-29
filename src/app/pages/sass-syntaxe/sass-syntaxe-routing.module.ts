import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassSyntaxePage } from './sass-syntaxe.page';

const routes: Routes = [
  {
    path: '',
    component: SassSyntaxePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassSyntaxePageRoutingModule {}
