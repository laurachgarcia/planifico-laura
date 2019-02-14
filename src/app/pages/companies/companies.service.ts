import { Injectable } from '@angular/core';
import {share, tap} from 'rxjs/operators';
import {ICompany} from './models/companies';
import {EventsManagerService} from '../../global-service/internal-events/events-manager.service';
import {ApiService} from '../auth/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private endpoint: 'api/companies';

  constructor(private api: ApiService, private events: EventsManagerService) {
  }

  loadData() {
    return this.api.get('api/companies').pipe(share());
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
