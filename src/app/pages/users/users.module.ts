import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {UsersService} from './users.service';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthinterceptorProvider} from '../../global-service/auth.interceptor';
// import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
  providers: [UsersService, AuthinterceptorProvider],
  entryComponents: [ListComponent]
})
export class UsersModule {
}
