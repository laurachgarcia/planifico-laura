import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";;
import {ListCompaniesComponent} from "../list-companies/list-companies.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {CompaniesService} from "../companies.service";
import {EventsManagerService} from "../../../global-service/internal-events/events-manager.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-companies',
  templateUrl: './edit-companies.component.html',
  styleUrls: ['./edit-companies.component.scss']
})
export class EditCompaniesComponent implements OnInit {
  data: any;
  public form: FormGroup;

  constructor(private events: EventsManagerService,
              private  service: CompaniesService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<ListCompaniesComponent>,
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
          name: [this.data.name, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
          description: [this.data.description, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
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
