import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from './user-dto.model';

@Injectable({
  providedIn: 'root'
})
export class UsersProxyService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserDTO[]> {
    return this.httpClient.get<UserDTO[]>('http://localhost:3001/api/public/users');
  }
}
