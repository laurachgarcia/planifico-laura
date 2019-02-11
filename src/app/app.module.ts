import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialCDKModule} from './material-cdk/material-cdk.module';
import {ToastrModule} from 'ngx-toastr';
import {SharedService} from './layouts/shared-service';
import {AuthenticatedGuard} from './utils/guards/authenticated.guard';
import {UnauthenticatedGuard} from './utils/guards/unauthenticated.guard';
import {AuthinterceptorProvider} from './global-service/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialCDKModule,
    ToastrModule.forRoot(),
  ],
  providers: [SharedService, AuthenticatedGuard, UnauthenticatedGuard, AuthinterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
