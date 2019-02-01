import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {UsersService} from "../users.service";
import {EventsManagerService} from "../../../global-service/internal-events/events-manager.service";
import {MatDialogRef} from "@angular/material";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    public form: FormGroup;
  constructor(private dialogRef: MatDialogRef<AddUserComponent>,
              private fb: FormBuilder,
              private  service: UsersService,
              private events: EventsManagerService,
              private readonly toast: ToastrService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
      this.form = this.fb.group({
          name: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
          email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      });
  }

  save(form) {
    console.log(form);
      this.service.save(form).subscribe(
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
