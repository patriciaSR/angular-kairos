import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenDTO } from './token.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, @Inject('config') private config) {}

    getToken(body): Observable<TokenDTO> {
      return this.http.post<TokenDTO>(this.config.api + '/auth', body);
 }
}
