import {Injectable} from '@angular/core';
import {ApiService} from '../../auth/api.service';
import {share, tap} from 'rxjs/operators';
import {ICompany} from './models/companies';
import {EventsManagerService} from '../../global-service/internal-events/events-manager.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private endpoint: 'api/companies';

  constructor(private api: ApiService, private events: EventsManagerService) {
  }

  loadData() {
    return this.api.get('api/companies?where=[{"op": "eq", "field": "deleted", "value": 0}]').pipe(share());
  }

  save(company: ICompany) {
    return this.api.post('api/companies', company);
  }

  update(data, id) {
    return this.api.put(`api/companies/${id}`, data);
  }

  delete(companies: number) {
    return this.api.delete(`api/companies/${companies}`);
  }
}
