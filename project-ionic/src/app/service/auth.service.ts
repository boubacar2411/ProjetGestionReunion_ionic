import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any>
  {
    return this.http.post(URL+'/auth/local', user).pipe();
  }

  register(user: User): Observable<any>
  {
    return this.http.post(URL+'/users', user).pipe();
  }
}
