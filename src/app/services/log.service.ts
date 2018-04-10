import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LogService {

  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated Componets', date: new Date ('12/01/2017 12:21:27')},
      {id: '2', text: 'Added Bootstrap', date: new Date ('12/21/2017 12:20:21')},
      {id: '3', text: 'Logs Components Added', date: new Date ('12/22/2017 12:00:21')}
    ]
   }

   getLogs(): Observable<Log[]> {
     return of(this.logs);
   }

   setFormLog(log: Log) {
      this.logSource.next(log);
   }

}
