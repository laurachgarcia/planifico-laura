import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {UsersService} from './users.service';
import {AddUserComponent} from './add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditUserComponent} from './edit-user/edit-user.component';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import {AuthinterceptorProvider} from '../../global-service/auth.interceptor';
import {MaterialCDKModule} from '../../material-cdk/material-cdk.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MaterialCDKModule,
    MatAutocompleteModule
  ],
  declarations: [ListComponent, AddUserComponent, EditUserComponent, DeleteUserComponent],
  exports: [ListComponent, AddUserComponent, EditUserComponent, DeleteUserComponent],
  providers: [UsersService, AuthinterceptorProvider],
  entryComponents: [AddUserComponent, EditUserComponent, DeleteUserComponent]
})
export class UsersModule {
}
