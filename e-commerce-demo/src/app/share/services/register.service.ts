import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(public http: HttpClient) {}
  base = 'http://localhost:5268/api/Account/register';
  registerNewUser(user: User) {
    return this.http.post<User>(this.base + 'register', user);
  }
}
