import {Subject} from 'rxjs/Subject';

export interface IEventsManager {
  [key: string]: Subject<any>;
}
