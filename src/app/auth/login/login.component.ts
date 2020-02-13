import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonValidator } from 'src/app/common-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, CommonValidator.startWithNumber], [CommonValidator.userTaken]),
      password: new FormControl('', [Validators.required, Validators.min(3)])
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
