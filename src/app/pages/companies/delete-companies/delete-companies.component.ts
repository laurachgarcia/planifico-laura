import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ListCompaniesComponent} from "../list-companies/list-companies.component";
import {CompaniesService} from "../companies.service";
import {EventsManagerService} from "../../../global-service/internal-events/events-manager.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-delete-companies',
  templateUrl: './delete-companies.component.html',
  styleUrls: ['./delete-companies.component.scss']
})
export class DeleteCompaniesComponent implements OnInit {
  data: any;

  constructor(private dialogRef: MatDialogRef<ListCompaniesComponent>,
              private events: EventsManagerService,
              private  service: CompaniesService,
              private readonly toast: ToastrService,
              @Inject(MAT_DIALOG_DATA) data) {
      this.data = data;
  }

  ngOnInit() {
  }

  save() {
      this.service.delete(this.data.id).subscribe(
          (item) => {
              console.log('GUARDÓ');
              this.events.publish('changed-usuario', null);
              this.toast.success('Eliminado con éxito');
              this.dialogRef.close();
          },
          () => {
              this.toast.error('Error al eliminar');
          }
      );
  }

  close() {
      this.dialogRef.close();
  }

}
