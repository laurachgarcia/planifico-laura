import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatIconModule,
  MatInputModule, MatListModule, MatPaginatorModule,
  MatSelectModule, MatTableModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {A2CardComponent} from './card/card.component';
import {BadgeComponent} from './badge/badge.component';
import {DialogResultComponent, PageDialogComponent} from './dialog/dialog.component';
import {FileComponent} from './file/file.component';
import {ChartsModule} from 'ng2-charts';

const _COMPONENTS_ = [
  MatButtonModule, MatCheckboxModule, MatFormFieldModule,
  MatInputModule, MatSelectModule, MatCardModule,
  MatCheckboxModule, MatButtonModule, MatButtonToggleModule,
  MatIconModule, MatTableModule, MatPaginatorModule, MatDialogModule,
  MatListModule, ChartsModule];

@NgModule({
  declarations: [A2CardComponent, BadgeComponent, PageDialogComponent, DialogResultComponent, FileComponent],
  imports: [
    CommonModule,
    ..._COMPONENTS_,
  ],
  exports: [
    ..._COMPONENTS_,
    A2CardComponent,
    BadgeComponent,
    PageDialogComponent,
    DialogResultComponent,
    FileComponent
  ]
})
export class MaterialCDKModule {
}
