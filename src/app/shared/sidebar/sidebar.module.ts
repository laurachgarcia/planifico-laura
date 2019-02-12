import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {RouterModule} from '@angular/router';
import {LogoModule} from '../logo/logo.module';
import {MainMenuModule} from '../main-menu/main-menu.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LogoModule,
    MainMenuModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule { }
