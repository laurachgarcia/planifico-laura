import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {AuthinterceptorProvider} from '../../global-service/auth.interceptor';
import {MaterialCDKModule} from '../../material-cdk/material-cdk.module';
import {CompaniesRoutingModule} from './companies-routing.module';
import {ListCompaniesComponent} from './list-companies/list-companies.component';
import {UsersService} from '../users/users.service';
import {AddCompaniesComponent} from './add-companies/add-companies.component';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    ReactiveFormsModule,
    MaterialCDKModule
  ],
  declarations: [ListCompaniesComponent, AddCompaniesComponent],
  exports: [ListCompaniesComponent, AddCompaniesComponent],
  providers: [UsersService, AuthinterceptorProvider],
  entryComponents: [AddCompaniesComponent]
})
export class CompaniesModule {
}
