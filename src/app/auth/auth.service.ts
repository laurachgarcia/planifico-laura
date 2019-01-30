import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {IAuthUser, IUser} from './models/user.model';
import {map, share} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
    private _subjectToken: BehaviorSubject<string>;
    private _subjectUser: BehaviorSubject<IUser>;

    constructor(private api: ApiService) {
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
    public login(user: IAuthUser) {
        console.log(user);
        // const data = SHA256(user.login) + SHA256(user.password);
        const data = {email: user.login,
            password: user.password
        };
        const observer = this.api.post('login', data)
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
        localStorage.clear();
        this._subjectToken.next(null);
        this._subjectUser.next(null);
    }
}
