import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {CompaniesService} from "../companies.service";
import {EventsManagerService} from "../../../global-service/internal-events/events-manager.service";
import {MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-companies',
  templateUrl: './add-companies.component.html',
  styleUrls: ['./add-companies.component.scss']
})
export class AddCompaniesComponent implements OnInit {

  public form: FormGroup;
  constructor(private dialogRef: MatDialogRef<AddCompaniesComponent>,
              private fb: FormBuilder,
              private  service: CompaniesService,
              private events: EventsManagerService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
      this.form = this.fb.group({
          name: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
          description: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      });
  }

  save(form) {
    console.log(form);
      this.service.save(form).subscribe(
          (item) => {
             console.log('GUARDÓ');
              this.events.publish('changed-usuario', null);
              this.dialogRef.close(this.form.value);
          }
      );
  }

    close() {
        this.dialogRef.close();
    }

}
