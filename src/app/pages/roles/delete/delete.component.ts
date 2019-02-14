import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ListComponent} from '../../users/list/list.component';
import {EventsManagerService} from '../../../global-service/internal-events/events-manager.service';
import {ToastrService} from 'ngx-toastr';
import {RolesService} from '../roles.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  data: any;

  constructor(private dialogRef: MatDialogRef<ListComponent>,
              private events: EventsManagerService,
              private  service: RolesService,
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
        this.events.publish('changed-roles', null);
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
