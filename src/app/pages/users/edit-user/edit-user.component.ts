import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


import {ListComponent} from '../list/list.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {UsersService} from '../users.service';
import {EventsManagerService} from '../../../global-service/internal-events/events-manager.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  data: any;
  roles: any;
  public form: FormGroup;

  constructor(private events: EventsManagerService,
              private  service: UsersService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<ListComponent>,
              private readonly toast: ToastrService,
              @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
  }

  ngOnInit() {
    console.log(this.data);
    this.initForm();
    this.loadRol();
  }

  initForm() {
    this.form = this.fb.group({
      name: [this.data.name, [Validators.required]],
      email: [this.data.email, [Validators.required]],
      rolesAutocomplete: [this.data.role_name, [Validators.required]],
      role: [this.data.role_id]
    });
  }

  loadRol() {
    this.service.roles().subscribe((data: any) => {
      this.roles = data;
      console.log(this.roles);
    });
  }

  setItem(id) {
    this.form.get('role').setValue(id);
  }

  save(form) {
    console.log(form);
    this.service.update(form, this.data.id).subscribe(
      (item) => {
        console.log('GUARDÓ');
        this.events.publish('changed-usuario', null);
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
