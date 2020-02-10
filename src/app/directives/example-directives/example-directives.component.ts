import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-directives',
  templateUrl: './example-directives.component.html',
  styleUrls: ['./example-directives.component.css']
})
export class ExampleDirectivesComponent implements OnInit {

  colors: string[];

  constructor() { }

  ngOnInit(): void {
    this.colors = ['red', 'blue', 'yellow', 'white', 'pink', 'purple'];
  }

}
