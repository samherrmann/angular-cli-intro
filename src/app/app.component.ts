import { Component } from '@angular/core';
import { LoggerService } from "./logger.service";
import { GithubService, User } from "./github.service";

@Component({
  selector: 'fw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fw works!';
  message = 'Hi there, I am at ForwardJS 2017. Angular CLI is awesome!';
  user = new User();

  constructor(private logger: LoggerService,
              private github: GithubService) {
    logger.log('App component loaded!')

    github.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }
}
