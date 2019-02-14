import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IAuthUser, IUser} from '../interfaces/user.interface';
import {Api} from '../../../utils/services/api.service';
import {map, share, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _subjectToken: BehaviorSubject<string>;
  private _subjectUser: BehaviorSubject<IUser>;

  constructor(private api: Api) {
    this._subjectToken = new BehaviorSubject<string>(localStorage.getItem('token'));
    this._subjectUser = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('user')));
  }

  get isAuthenticated() {
    return this._subjectToken.asObservable()
      .pipe(
        map(i => Boolean(i))
      );
  }

  /**
   * Comprobar la existencia de un token
   * @returns {boolean}
   */
  public get hasToken() {
    return Boolean(this._subjectToken.getValue());
  }

  /**
   * Comprobar la existencia de un token
   * @returns {boolean}
   */
  public set token(token: string) {
    localStorage.setItem('token', token);
    this._subjectToken.next(token);
  }

  /**
   * Comprobar la existencia de un token
   */
  public get token(): string {
    return this._subjectToken.getValue();
  }

  /**
   * Comprobar la existencia de un token
   * @returns {boolean}
   */
  public get user(): IUser {
    return this._subjectUser.getValue();
  }

  public set user(user: IUser) {
    this._subjectUser.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Iniciar sesión
   * @returns {Observable<never>}
   */
  public login(user: any) {
    console.log(user);
    const data = {email: user.email,
      password: user.password
    };
    const observer = this.api.post('api/login', data)
      .pipe(share());
    let dUser: any;
    observer.subscribe(
      d => (dUser = d),
      (err) => {
      },
      () => {
        this.token = (<IUser> dUser).token;
        console.log(<IUser> dUser);
        localStorage.setItem('user', JSON.stringify(dUser.user));
        localStorage.setItem('id', JSON.stringify(dUser.user.id));
        this._subjectUser.next(dUser);
      });

    return observer;
  }

  /**
   * Cerrar sesión
   * @returns {Observable<any>}
   */
  logout() {
    console.log('llego aqui');
    localStorage.clear();
    this._subjectToken.next(null);
    this._subjectUser.next(null);
  }
}
