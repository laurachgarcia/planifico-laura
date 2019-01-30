import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from "../auth/auth.service";
// import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.hasToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `${this.auth.token}`
        }
      });
    }

    return next.handle(request).pipe(
      tap(() => {},
        (err) => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            this.auth.logout();
            this.router.navigateByUrl('/auth/login').then(() => {
              // this.toast.error('Se ha vencido su sesión, u otro dispositivo esta usando sus credenciales.');
            });
          }
        })
    );
  }
}

export const AuthinterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
