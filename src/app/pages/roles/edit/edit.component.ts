import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventsManagerService} from '../../../global-service/internal-events/events-manager.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ListComponent} from '../../users/list/list.component';
import {ToastrService} from 'ngx-toastr';
import {RolesService} from '../roles.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  data: any;
  public form: FormGroup;

  constructor(private events: EventsManagerService,
              private  service: RolesService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<ListComponent>,
              private readonly toast: ToastrService,
              @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
  }

  ngOnInit() {
    console.log(this.data);
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [this.data.name, Validators.compose([Validators.required, Validators.minLength(3)])],
      description: [this.data.description, Validators.compose([Validators.required, Validators.minLength(3)])],
    });
  }

  save(form) {
    console.log(form);
    this.service.update(form, this.data.id).subscribe(
      (item) => {
        console.log('GUARDÓ');
        this.events.publish('changed-roles', null);
        this.toast.success('Guardado con éxito');
        this.dialogRef.close(this.form.value);
      },
      () => {
        this.toast.error('Error al guardar');
      }
    );
  }

  close() {
    this.dialogRef.close();
  }

}
