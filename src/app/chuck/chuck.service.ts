import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChuckService {
  constructor(private http: HttpClient, @Inject('config') private config) {}

    getQuote(): Observable<string> {
      return this.http.get(this.config.api, {responseType: 'text'});
 }
}
