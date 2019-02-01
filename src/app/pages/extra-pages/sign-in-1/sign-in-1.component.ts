import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {CustomValidators} from "ng2-validation";
import {AuthService} from "../../../auth/auth.service";

@Component({
    selector: 'page-sign-in-1',
    templateUrl: './sign-in-1.component.html',
    styleUrls: ['./sign-in-1.component.scss']
})
export class PageSignIn1Component implements OnInit {
    public form: FormGroup;

    constructor(private readonly authService: AuthService,
                private router: Router,
                private readonly fb: FormBuilder) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: [null, Validators.compose([Validators.required, CustomValidators.email])],
            password: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
        });
    }

    onSubmit() {
        console.log(this.form.value);
        const auth = this.form.value;
        // this.router.navigate(['/default-layout/dashboard']);
        this.authService.login(auth)
            .subscribe(
                data => {
                    this.router.navigateByUrl('default-layout/user');
                },
                error => {
                    // this.toast.error('Error');
                },
                () => {
                    this.form.reset();
                });
    }
}
