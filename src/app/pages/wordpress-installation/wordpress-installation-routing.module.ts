import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordpressInstallationPage } from './wordpress-installation.page';

const routes: Routes = [
  {
    path: '',
    component: WordpressInstallationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordpressInstallationPageRoutingModule {}
