import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CompaniesService} from '../companies.service';
import {EventsManagerService} from '../../../global-service/internal-events/events-manager.service';
import {Subscription} from 'rxjs';
import {MatDialog, MatDialogConfig, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SharedService} from '../../../layouts/shared-service';
import {DialogResultComponent} from "../../material-components/dialog/dialog.component";
import {AddCompaniesComponent} from "../add-companies/add-companies.component";

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.scss']
})
export class ListCompaniesComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Companies';
    displayedColumns = ['id', 'name', 'description', 'created_at', 'options'];
    dialogRef: MatDialogRef<DialogResultComponent>;
    selectedOption: string;
    dataSource: MatTableDataSource<CompanyData>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    subscriptions: Subscription[] = [];

    constructor(private service: CompaniesService,
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

    loadData() {
        this.service.loadData().subscribe((data: any) => {
            this.dataSource = new MatTableDataSource<CompanyData>(data);
        });
    }

    openDialog() {
        let dialogRef = this.dialog.open(AddCompaniesComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    /*openEdit($event) {
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
    }*/

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

export interface CompanyData {
    id: string;
    name: string;
    description: string;
    created_at: string;
}
