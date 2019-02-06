import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";;
import {ListRolComponent} from "../list-rol/list-rol.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {RolService} from "../rol.service";
import {EventsManagerService} from "../../../global-service/internal-events/events-manager.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-rol',
  templateUrl: './edit-rol.component.html',
  styleUrls: ['./edit-rol.component.scss']
})
export class EditRolComponent implements OnInit {
  data: any;
  public form: FormGroup;

  constructor(private events: EventsManagerService,
              private  service: RolService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<ListRolComponent>,
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
          name: [this.data.name, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
          slug: [this.data.slug, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
          description: [this.data.description, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      });
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
