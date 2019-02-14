import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboards'
    },
    {
      path: 'dashboards',
      loadChildren: '../../pages/dashboards/dashboards.module#DashboardsModule'
    },
    {
      path: 'users',
      loadChildren: '../../pages/users/users.module#UsersModule'
    },
    {
      path: 'companies',
      loadChildren: '../../pages/companies/companies.module#CompaniesModule'
    },
    {
      path: 'roles',
      loadChildren: '../../pages/roles/roles.module#RolesModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
