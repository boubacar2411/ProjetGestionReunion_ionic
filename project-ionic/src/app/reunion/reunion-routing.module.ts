import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReunionPage } from './reunion.page';

const routes: Routes = [
  {
    path: '',
    component: ReunionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReunionPageRoutingModule {}
