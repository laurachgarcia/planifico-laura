import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../users.service';
import {EventsManagerService} from '../../../global-service/internal-events/events-manager.service';
import {Subscription} from 'rxjs';
// import { DataSource } from '@angular/cdk/collections'
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { BehaviorSubject, Observable, merge} from 'rxjs';
import { map } from 'rxjs/operators';

import { SharedService } from '../../../layouts/shared-service';
import {DialogResultComponent} from "../../material-components/dialog/dialog.component";
import {AddUserComponent} from "../add-user/add-user.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Users';
    displayedColumns = ['userId', 'userName', 'progress', 'options'];
    dataC = [
        {id: "1", name: "Levi M.", progress: "62"},
        {id: "2", name: "Isla A.", progress: "7"},
        {id: "3", name: "Elizabeth C.", progress: "86"},
        {id: "4", name: "Atticus J.", progress: "56"},
        {id: "5", name: "Theodore J.", progress: "60"},
        {id: "6", name: "Amelia O.", progress: "45"},
        {id: "7", name: "Asher V.", progress: "6"},
        {id: "8", name: "Violet O.", progress: "15"},
        {id: "9", name: "Charlotte A.", progress: "2"},
        {id: "10", name: "Asher M.", progress: "89"},
        {id: "11", name: "Charlotte J.", progress: "85"},
        {id: "12", name: "Atticus O.", progress: "73"},
        {id: "13", name: "Isabella O.", progress: "23"}
    ];
    dialogRef: MatDialogRef<DialogResultComponent>;
    selectedOption: string;
    dataSource: MatTableDataSource<UserData>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

  subscriptions: Subscription[] = [];

  constructor(private service: UsersService,
              private events: EventsManagerService,
              private _sharedService: SharedService,
              public dialog: MatDialog,) {
      this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
      this.dataSource = new MatTableDataSource<UserData>(this.dataC);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog() {
      console.log('llegue al add-user');
    let dialogRef = this.dialog.open(AddUserComponent);
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

export interface UserData {
    id: string;
    name: string;
    progress: string;
}
