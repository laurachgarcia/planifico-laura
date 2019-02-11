import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar.component';
import {MaterialCDKModule} from '../../material-cdk/material-cdk.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialCDKModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
