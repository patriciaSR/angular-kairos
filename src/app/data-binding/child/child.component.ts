import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  @Output() reply = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onReply() {
    this.reply.emit('Hola Papá!!');
  }

}
