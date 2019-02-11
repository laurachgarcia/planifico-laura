import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {EventsManagerService} from '../../../global-service/internal-events/events-manager.service';
import {ToastrService} from 'ngx-toastr';
import {RolesService} from '../roles.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public form: FormGroup;
  constructor(private dialogRef: MatDialogRef<AddComponent>,
              private fb: FormBuilder,
              private  service: RolesService,
              private events: EventsManagerService,
              private readonly toast: ToastrService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      slug: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      description: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
    });
  }

  save(form) {
    console.log(form);
    this.service.save(form).subscribe(
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
