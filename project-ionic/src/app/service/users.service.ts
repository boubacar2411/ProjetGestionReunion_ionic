import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${URL}/users`);
  }

  getUser(id: number): Promise<User>
  {
    return this.http.get<User>(`{$URL}/users/${id}`).toPromise();
  }

  addUser(user: User): Observable<User>
  {
    return this.http.post<User>(`${URL}/users`, user);
  }

  update(user: User): Observable<User>
  {
    return this.http.put<User>(`${URL}/users/${user.id}`, user);
  }

  delete(id: number): Observable<User>
  {
    return this.http.delete<User>(`${URL}/users/${id}`);
  }
}
