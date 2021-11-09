import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptePage } from './compte.page';

const routes: Routes = [
  {
    path: '',
    component: ComptePage,
  },

  {
    path: 'adduser',
    loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
  },

  {
    path: 'modifier/:id',
    loadChildren: () => import('./modifier/modifier.module').then( m => m.ModifierPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptePageRoutingModule {}
