import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticatedGuard} from './utils/guards/authenticated.guard';
import {UnauthenticatedGuard} from './utils/guards/unauthenticated.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layouts/public/public.module#PublicModule',
    // canActivate: [ UnauthenticatedGuard ],
    data: { preload: true }
  },
  {
    path: 'admin',
    loadChildren: './layouts/admin/admin.module#AdminModule',
    canActivate: [ AuthenticatedGuard ],
    data: { preload: true }
    // canActivate: [ UnauthenticatedGuard ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
