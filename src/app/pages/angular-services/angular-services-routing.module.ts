import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularServicesPage } from './angular-services.page';

const routes: Routes = [
  {
    path: '',
    component: AngularServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularServicesPageRoutingModule {}
