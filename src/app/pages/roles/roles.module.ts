import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {AuthinterceptorProvider} from '../../global-service/auth.interceptor';
import {MaterialCDKModule} from '../../material-cdk/material-cdk.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import {ListComponent} from './list/list.component';
import {RolesService} from './roles.service';
import {RolesRoutingModule} from './roles-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule,
    MaterialCDKModule
  ],
  declarations: [ListComponent, AddComponent, EditComponent, DeleteComponent],
  exports: [ListComponent, AddComponent, EditComponent, DeleteComponent],
  providers: [RolesService, AuthinterceptorProvider],
  entryComponents: [AddComponent, EditComponent, DeleteComponent]
})
export class RolesModule {
}
