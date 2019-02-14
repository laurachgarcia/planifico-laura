import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import {DashboardGeneralComponent} from './components/general/general.component';
import {MaterialCDKModule} from '../../material-cdk/material-cdk.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    MaterialCDKModule
  ],
  declarations: [DashboardGeneralComponent]
})
export class DashboardsModule { }
