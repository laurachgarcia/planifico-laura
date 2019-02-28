import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import {DashboardGeneralComponent} from './components/general/general.component';
import {MaterialCDKModule} from '../../material-cdk/material-cdk.module';
import {MatAutocompleteModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    ReactiveFormsModule,
    MaterialCDKModule,
    MatAutocompleteModule
  ],
  declarations: [DashboardGeneralComponent]
})
export class DashboardsModule { }
