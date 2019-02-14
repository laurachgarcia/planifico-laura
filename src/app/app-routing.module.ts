import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthenticatedGuard} from './utils/guards/authenticated.guard';
import {UnauthenticatedGuard} from './utils/guards/unauthenticated.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './layouts/public/public.module#PublicModule',
    canActivate: [ UnauthenticatedGuard ],
  },
  {
    path: 'admin',
    loadChildren: './layouts/admin/admin.module#AdminModule',
    canActivate: [ AuthenticatedGuard ],
    // data: { preload: true }
    // canActivate: [ UnauthenticatedGuard ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
