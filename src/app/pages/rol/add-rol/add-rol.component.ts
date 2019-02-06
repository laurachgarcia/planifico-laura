import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {RolService} from "../rol.service";
import {EventsManagerService} from "../../../global-service/internal-events/events-manager.service";
import {MatDialogRef} from "@angular/material";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-rol',
  templateUrl: './add-rol.component.html',
  styleUrls: ['./add-rol.component.scss']
})
export class AddRolComponent implements OnInit {
  public form: FormGroup;
  constructor(private dialogRef: MatDialogRef<AddRolComponent>,
              private fb: FormBuilder,
              private  service: RolService,
              private events: EventsManagerService,
              private readonly toast: ToastrService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
      this.form = this.fb.group({
          name: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
          slug: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
          description: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
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
