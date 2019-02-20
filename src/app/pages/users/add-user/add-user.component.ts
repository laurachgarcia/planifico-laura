import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {EventsManagerService} from '../../../global-service/internal-events/events-manager.service';
import {MatDialogRef} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {UsersService} from '../users.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public form: FormGroup;
  roles: any;

  constructor(private dialogRef: MatDialogRef<AddUserComponent>,
              private fb: FormBuilder,
              private  service: UsersService,
              private events: EventsManagerService,
              private readonly toast: ToastrService) {
  }

  ngOnInit() {
    this.initForm();
    this.loadRol();
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      rolesAutocomplete: [null],
      role: [null]
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
    const _form = form;
    delete _form.rolesAutocomplete;
    console.log(_form);
    this.service.save(_form).subscribe(
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
