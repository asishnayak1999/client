import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
}) // only one object
export class AuthService {
  //we can perform dependency injection via constructur
  constructor(private httpclient: HttpClient) {}

  registerUser(register: Register) {
    return this.httpclient.post('api/users/register', register);
  }
}
