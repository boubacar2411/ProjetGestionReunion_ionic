import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'reunion',
        loadChildren: () => import('../reunion/reunion.module').then(m => m.ReunionPageModule)
      },
      {
        path: 'salle',
        loadChildren: () => import('../salle/salle.module').then(m => m.SallePageModule)
      },
      {
        path: 'compte',
        loadChildren: () => import('../compte/compte.module').then(m => m.ComptePageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/reunion',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/reunion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
