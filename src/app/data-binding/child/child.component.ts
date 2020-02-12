import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  @Output() reply = new EventEmitter<string>();
  child: string;
  param: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.child = this.activatedRoute.snapshot.params.child;
    this.param = this.activatedRoute.snapshot.queryParams.message;

  }

  onReply() {
    this.reply.emit('Hola Papá!!');
  }

}
