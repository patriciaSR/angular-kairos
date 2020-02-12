import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/auth/confirm.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, CanComponentDeactivate {
  @Input() message: string;
  @Output() reply = new EventEmitter<string>();
  child: string;
  param: string;
  saved: boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.saved = false;
    // this.child = this.activatedRoute.snapshot.params.child;
    // this.param = this.activatedRoute.snapshot.queryParams.message;

    // subscribe a los cambios del queryparams
    this.activatedRoute.params.subscribe((params) => {
      this.child = params.child;
    });

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.param = queryParams.message;
    });
  }

  canDeactivate(): boolean {
    if (this.saved) {
      return true;
    } else {
      return confirm('Seguro que quieres salir sin guardar');
    }
  }

  onSave() {
    this.saved = true;
  }

  onReply() {
    this.reply.emit('Hola Papá!!');
  }

}
