import {Injectable} from '@angular/core';
import {share, tap} from 'rxjs/operators';
import {EventsManagerService} from '../../global-service/internal-events/events-manager.service';
import {ApiService} from '../auth/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private endpoint: 'api/users';

  constructor(private api: ApiService, private events: EventsManagerService) {
  }

  loadData() {
    return this.api.get('api/roles?where=[{"op": "eq", "field": "deleted", "value": 0}]').pipe(share());
  }

  save(data) {
    return this.api.post('api/roles', data);
  }

  update(data, id) {
    return this.api.put(`api/roles/${id}`, data);
  }

  delete(id: number) {
    return this.api.delete(`api/roles/${id}`);
  }
}
