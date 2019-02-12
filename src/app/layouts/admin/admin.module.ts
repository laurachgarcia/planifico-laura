import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {SidebarModule} from '../../shared/sidebar/sidebar.module';
import {NavbarModule} from '../../shared/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
    NavbarModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule {
}
