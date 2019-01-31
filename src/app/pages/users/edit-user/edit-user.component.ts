import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";;
import {ListComponent} from "../list/list.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {UsersService} from "../users.service";
import {EventsManagerService} from "../../../global-service/internal-events/events-manager.service";

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
    data: any;
    public form: FormGroup;

    constructor(private events: EventsManagerService,
                private  service: UsersService,
                private fb: FormBuilder,
                private dialogRef: MatDialogRef<ListComponent>,
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
            email: [this.data.email, Validators.compose([Validators.required, CustomValidators.email])],
        });
    }

    save(form) {
        console.log(form);
        this.service.update(form, this.data.id).subscribe(
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
