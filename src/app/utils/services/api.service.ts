import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Api {

  constructor(private readonly http: HttpClient) {
  }

  static generateUri(segment: string): string {
    const url = Boolean(localStorage.getItem('usuario')) ? '' : '';
    return `${environment.api.url}:${environment.api.port}/${url}${segment}`;
  }

  get(url: string, params ?: any): Observable<any> {
    return this.http.get(Api.generateUri(url), params);
  }

  post(url: string, data: any, params ?: any): Observable<any> {
    return this.http.post(Api.generateUri(url), data, params);
  }

  put(url: string, data: any, params ?: any): Observable<any> {
    return this.http.put(Api.generateUri(url), data, params);
  }

  delete(url: string, data ?: any): Observable<any> {
    return this.http.delete(Api.generateUri(url));
  }

  head(url: string): Observable<any> {
    return this.http.head(Api.generateUri(url));
  }

}
