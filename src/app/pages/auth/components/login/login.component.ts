import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {App} from '../../../../utils/constantes/app';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private readonly router: Router,
              private readonly fb: FormBuilder,
              private readonly authService: AuthService,
              private readonly toast: ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    });
  }

  toAdmin() {
    this.router.navigateByUrl(App.urlAdmin);
  }

  onSubmit() {
    // console.log('SUBMIT', this.form.value);
    this.authService.login(this.form.value)
      .subscribe(
        data => {
          this.toast.success('Autorización satisfactoria.');
          this.router.navigateByUrl(App.urlAdmin);
        },
        error => {
          // this.toast.error('Error');
        },
        () => {
          this.form.reset();
        });
  }
}
