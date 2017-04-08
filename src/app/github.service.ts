import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  userUrl: string;

  constructor(private http: Http) {
    this.userUrl = "https://api.github.com/users/macdonst"
  }

  getUser(): Observable<User> {
    return this.http.get(this.userUrl)
      .map((response: Response) => this.toUser(response.json()))
  }

  private toUser = (r: any): User => {
    let user = new User(r);
    return user;
  }

  private mapUsers = (response: Response): User[] => {
    return response.json().map(this.toUser)
  }

}

export class User {
    login: string;
    name: string;
    repos_url: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;

    constructor(attributes: {} = null) {
        this.attributes = attributes;
    }

  set attributes(attributes: {}) {
    for (var k in attributes) {
      this[k] = attributes[k];
    }
  }

  get attributes(): {} {
    let obj: User = new User()
    obj.name = this.name
    obj.login = this.login
    obj.repos_url = this.repos_url
    obj.public_repos = this.public_repos
    obj.public_gists = this.public_gists
    obj.followers = this.followers
    obj.following = this.following
    return obj
  }
}
