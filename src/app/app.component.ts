import { Component } from '@angular/core';
import { LoggerService } from "./logger.service";

@Component({
  selector: 'fw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fw works!';
  message = 'Hi there, I am at ForwardJS 2017. Angular CLI is awesome!';

  constructor(private logger: LoggerService) {
    logger.log('App component loaded!')
  }
}
