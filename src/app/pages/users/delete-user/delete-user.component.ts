import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ListComponent} from '../list/list.component';
import {UsersService} from '../users.service';
import {EventsManagerService} from '../../../global-service/internal-events/events-manager.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  data: any;

  constructor(private dialogRef: MatDialogRef<ListComponent>,
              private events: EventsManagerService,
              private  service: UsersService,
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
