import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtmlSyntaxePage } from './html-syntaxe.page';

const routes: Routes = [
  {
    path: '',
    component: HtmlSyntaxePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlSyntaxePageRoutingModule {}
