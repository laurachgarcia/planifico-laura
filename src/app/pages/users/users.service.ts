import {Injectable} from '@angular/core';
import {share, tap} from 'rxjs/operators';
import {IUser} from './models/user';
import {EventsManagerService} from '../../global-service/internal-events/events-manager.service';
import {ApiService} from '../auth/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private endpoint: 'api/users';

  constructor(private api: ApiService, private events: EventsManagerService) {
  }

  loadData() {
    return this.api.get('api/users?where=[{"op": "eq", "field": "deleted", "value": 0}]').pipe(share());
  }

  save(user: IUser) {
    return this.api.post('api/users', user);
  }

  update(data, id) {
    return this.api.put(`api/users/${id}`, data);
  }

  delete(user: number) {
    return this.api.delete(`api/users/${user}`);
  }
}
