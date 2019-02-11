import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DialogResultComponent} from '../../../material-cdk/dialog/dialog.component';
import {Subscription} from 'rxjs';
import {EventsManagerService} from '../../../global-service/internal-events/events-manager.service';
import {SharedService} from '../../../layouts/shared-service';
import {RolesService} from '../roles.service';
import {AddComponent} from '../add/add.component';
import {EditComponent} from '../edit/edit.component';
import {DeleteComponent} from '../delete/delete.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy, AfterViewInit {
  pageTitle = 'Roles';
  displayedColumns = ['name', 'slug', 'description', 'options'];
  dialogRef: MatDialogRef<DialogResultComponent>;
  selectedOption: string;
  dataSource: MatTableDataSource<RolesData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscriptions: Subscription[] = [];

  constructor(private service: RolesService,
              private events: EventsManagerService,
              private _sharedService: SharedService,
              public dialog: MatDialog) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.loadData();
    this.subscriptions.push(
      (this.events.subscribe('changed-roles').subscribe(() => this.loadData()))
    );
  }

  ngAfterViewInit() {
    this.loadData();
    console.log('INICIO', this.dataSource);
    // this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.service.loadData().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<RolesData>(data);
      console.log('LOADDATA', this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  openEdit($event) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {...$event};
    const dialogRef = this.dialog.open(EditComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  openDelete($event) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {...$event};
    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => {
      s.unsubscribe();
    });
  }

}

export interface RolesData {
  name: string;
  slug: string;
  description: string;
}
