import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  messageToChild: string;
  messageFromChild: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    return this.messageToChild = 'Hola hijo';
  }

  getMessage(event) {
    this.messageFromChild = event;
  }

}
