import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ListRolComponent} from "../list-rol/list-rol.component";
import {RolService} from "../rol.service";
import {EventsManagerService} from "../../../global-service/internal-events/events-manager.service";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-delete-rol',
  templateUrl: './delete-rol.component.html',
  styleUrls: ['./delete-rol.component.scss']
})
export class DeleteRolComponent implements OnInit {
  data: any;

    constructor(private dialogRef: MatDialogRef<ListRolComponent>,
                private events: EventsManagerService,
                private  service: RolService,
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
