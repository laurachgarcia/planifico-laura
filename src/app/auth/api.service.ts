import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';
import {EventsManagerService} from '../global-service/internal-events/events-manager.service';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    url = `${ environment.apiUri }:${ environment.apiPort }`;

    constructor(public http: HttpClient, private events: EventsManagerService) {
    }

    get(endpoint: string, params?: any, reqOpts?: any) {
        if (!reqOpts) {
            reqOpts = {
                params: new HttpParams()
            };
        }

        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new HttpParams();
            for (const k in params) {
                if (params.hasOwnProperty(k)) {
                    reqOpts.params = reqOpts.params.set(k, params[k]);
                }
            }
        }

        return this.http.get(this.url + '/' + endpoint, reqOpts);
    }

    post(endpoint: string, body: any, reqOpts?: any) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
        // .pipe( tap( (d) => (this.events.publish(`algo-cambio`, d))) );
    }

    put(endpoint: string, body: any, reqOpts?: any) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
        // .pipe( tap( (d) => (this.events.publish(`algo-cambio`, d))) );
    }

    delete(endpoint: string, reqOpts?: any) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts)
            .pipe( tap( (d) => (this.events.publish(`algo-cambio`, d))) );
    }

    patch(endpoint: string, body: any, reqOpts?: any) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    }
}
