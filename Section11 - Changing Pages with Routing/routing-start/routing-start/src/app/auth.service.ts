import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  isAuthenticate() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.loggedIn), 800);
    });
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  constructor() { }
}