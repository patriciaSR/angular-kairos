import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/first.service';
import { GodirectivesService } from 'src/app/godirectives.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  messageToChild: string;
  messageFromChild: string;

  constructor(private firstService: FirstService, private goDirectivesServices: GodirectivesService) { }

  ngOnInit(): void {
  }

  onClick() {
    return this.messageToChild = this.firstService.getMessage();
  }

  getMessage(event) {
    this.messageFromChild = event;
  }

  goDirectives() {
    return this.goDirectivesServices.goRoute();
  }

}
