import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GodirectivesService {

  constructor(private router: Router) { }

  goRoute() {
    this.router.navigate(['directives']);
  }
}
