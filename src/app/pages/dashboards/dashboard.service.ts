import {Injectable} from '@angular/core';
import {share, tap} from 'rxjs/operators';
import {EventsManagerService} from '../../global-service/internal-events/events-manager.service';
import {ApiService} from '../auth/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private api: ApiService, private events: EventsManagerService) {
  }

  companies() {
    return this.api.get('api/select/companies').pipe(share());
  }
  contracts(id) {
    return this.api.get(`api/select/contracts?${id}`).pipe(share());
  }
  graphic() {
    return this.api.get('api/charts/fte').pipe(share());
  }
  graphicFilter(id) {
    return this.api.get(`api/charts/fte?contract_id=${id}`).pipe(share());
  }
}
