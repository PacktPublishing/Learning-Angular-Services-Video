import { Injectable } from '@angular/core';
import {LOGS} from './mock-logs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  log(message: string) {
    console.log(message);
  }

  getLogs() {
    return LOGS;
  }
}
