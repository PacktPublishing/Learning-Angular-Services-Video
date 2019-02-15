import { Component, OnInit } from '@angular/core';
import {LoggingService} from './shared/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather App';
  author = 'Sam Orgill';
  company = 'Packt Publishing';

  logs = [];

  constructor(private loggingService: LoggingService,
  ){}

  ngOnInit() {
    this.getLogs();
  }

  getLogs() {
    this.logs = this.loggingService.getLogs();
  }

  onClick(message: string) {
    this.loggingService.log(message);
  }

}
