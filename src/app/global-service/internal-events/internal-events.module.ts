import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventsManagerService} from './events-manager.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ EventsManagerService ]
})
export class InternalEventsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: InternalEventsModule,
      providers: [EventsManagerService]
    };
  }
}
