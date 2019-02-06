import {Injectable} from '@angular/core';
import {ApiService} from '../../auth/api.service';
import {share, tap} from 'rxjs/operators';
import {IRol} from './models/rol';
import {EventsManagerService} from '../../global-service/internal-events/events-manager.service';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private endpoint: 'api/roles';

  constructor(private api: ApiService, private events: EventsManagerService) {
  }

  loadData() {
    return this.api.get('api/roles?where=[{"op": "eq", "field": "deleted", "value": 0}]').pipe(share());
  }

  save(rol: IRol) {
    return this.api.post('api/roles', rol);
  }

  update(data, id) {
    return this.api.put(`api/roles/${id}`, data);
  }

  delete(rol: number) {
    return this.api.delete(`api/roles/${rol}`);
  }
}
