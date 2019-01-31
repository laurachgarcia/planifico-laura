import {Injectable} from '@angular/core';
import {IEventsManager} from './events-manager.interface';
import {share} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs';

const ServiceName = 'EventsManagerService';

@Injectable({
  providedIn: 'root'
})
export class EventsManagerService {
  private events: IEventsManager = {};
  private _subject: BehaviorSubject<any>;

  constructor() {
    if (!this._subject) {
      this._subject = new BehaviorSubject<any>({});
    }
  }

  get listEvents() {
    return this._subject.asObservable();
  }

  subscribe(eventName: string): Observable<any> {
    if (!eventName) {
      throw new Error(`[${ServiceName}] Subscription method must get event name.`);
    }

    if (!Boolean(this.events[eventName])) {
      this.events[eventName] = new Subject<any>();
    }

    return this.events[eventName].asObservable().pipe(
      share()
    );
  }

  publish(eventName: string, value: any) {
    if (!eventName) {
      throw new Error(`[${ServiceName}] Subscription method must get event name.`);
    }

    if (!Boolean(this.events[eventName])) {
      this.events[eventName] = new Subject<any>();
    }
    this._subject.next({...this.events});
    this.events[eventName].next(value);
  }

}
