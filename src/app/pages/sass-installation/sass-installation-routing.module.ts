import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SassInstallationPage } from './sass-installation.page';

const routes: Routes = [
  {
    path: '',
    component: SassInstallationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SassInstallationPageRoutingModule {}
