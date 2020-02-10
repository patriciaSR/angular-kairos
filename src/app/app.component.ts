import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-kairos';
  show = true;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
