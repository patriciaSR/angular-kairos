import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonValidator } from 'src/app/common-validator';
import { LoginService } from '../login.service';
import { TokenDTO } from '../token.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  userToken: TokenDTO;
  sub: Subscription;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, CommonValidator.startWithNumber], [CommonValidator.userTaken]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit() {
    this.sub = this.loginService.getToken(this.form.value).subscribe(
      response => {
        this.userToken = response;
        sessionStorage.setItem('token', this.userToken.access_token);
      },
      error => console.log(error));
  }
}
