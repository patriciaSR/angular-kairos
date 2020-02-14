import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckService } from '../chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {
  quote: Observable<string>;

  constructor(private service: ChuckService) { }

  ngOnInit(): void {
    this.quote =  this.service.getQuote();
  }

  loadQuote() {
    this.quote =  this.service.getQuote();
  }
}
