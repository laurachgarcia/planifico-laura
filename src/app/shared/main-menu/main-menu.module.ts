import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainMenuComponent} from './main-menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [MainMenuComponent],
  exports: [MainMenuComponent]
})
export class MainMenuModule { }
