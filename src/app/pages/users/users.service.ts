import {Injectable} from '@angular/core';
import {ApiService} from '../../auth/api.service';
import {share, tap} from 'rxjs/operators';
import {IUser} from './models/user';
import {EventsManagerService} from '../../global-service/internal-events/events-manager.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private endpoint: 'api/users';

  constructor(private api: ApiService, private events: EventsManagerService) {
  }

  loadData() {
    return this.api.get('api/users').pipe(share());
  }

  save(user: IUser) {
    return this.api.post('api/users', user);
      // .pipe(tap((d) => (this.events.publish(`changed-${this.endpoint}`, d))));
  }

  update(user: IUser) {
    console.log(user);
    return this.api.put(`api/users/${user.id}`, user);
      // .pipe(tap((d) => (this.events.publish(`changed-${this.endpoint}`, d))));
  }

  delete(user: number) {
    return this.api.delete(`api/users/${user}`);
      // .pipe(tap((d) => (this.events.publish(`changed-${this.endpoint}`, d))));
  }
}
