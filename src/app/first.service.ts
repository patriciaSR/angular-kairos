import { Inject, Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private secondService: SecondService, @Inject('config') private config: any) { }

  getMessage(): string {
    return 'Hola Hijo por firstService/ ' + this.secondService.getMessage() + '/ ' + this.config.api;
  }
}
