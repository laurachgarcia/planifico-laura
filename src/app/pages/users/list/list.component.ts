import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../users.service';
import {EventsManagerService} from '../../../global-service/internal-events/events-manager.service';
import {Subscription} from 'rxjs';
import {MatDialog, MatDialogConfig, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SharedService} from '../../../layouts/shared-service';
import {DialogResultComponent} from "../../material-components/dialog/dialog.component";
import {AddUserComponent} from "../add-user/add-user.component";
import {EditUserComponent} from "../edit-user/edit-user.component";
import {DeleteUserComponent} from "../delete-user/delete-user.component";


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit, OnDestroy, AfterViewInit {
    pageTitle: string = 'Users';
    displayedColumns = ['id', 'name', 'email', 'created_at', 'options'];
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
        this.loadData();
        this.subscriptions.push(
            (this.events.subscribe('changed-usuario').subscribe(() => this.loadData()))
        );
    }

    ngAfterViewInit() {
        this.loadData();
        console.log('INICIO', this.dataSource);
        // this.dataSource.paginator = this.paginator;
    }

    loadData() {
        this.service.loadData().subscribe((data: any) => {
            this.dataSource = new MatTableDataSource<UserData>(data);
            console.log('LOADDATA', this.dataSource);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }

    openDialog() {
        let dialogRef = this.dialog.open(AddUserComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    openEdit($event) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {...$event};
        let dialogRef = this.dialog.open(EditUserComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    openDelete($event) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {...$event};
        let dialogRef = this.dialog.open(DeleteUserComponent, dialogConfig);
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
    email: string;
    created_at: string;
}
