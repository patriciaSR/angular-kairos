import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  optForm: FormGroup;
  profileForm: FormGroup;
  userToken: TokenDTO;
  sub: Subscription;

  constructor(private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required, CommonValidator.startWithNumber], [CommonValidator.userTaken]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    this.optForm = new FormGroup({
      a: new FormControl(''),
      b: new FormControl(''),
    });

    this.optForm.get('a').valueChanges.subscribe(checked => {
      if (checked) {
        const validators = [Validators.required, Validators.minLength(5)];

        this.optForm.addControl('opcionExtra', new FormControl('', validators));
      } else {
        this.optForm.removeControl('opcionExtra');
      }
      this.optForm.updateValueAndValidity();
    });

    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      description: [''],
      intervals: this.fb.array([]),
    });
  }

  get intervalsForms() {
    return this.profileForm.get('intervals') as FormArray;
  }

  addInterval() {
    const interval = this.fb.group({
      hourType: [''],
      hour: [''],
      powerValue: [''],
    });

    this.intervalsForms.push(interval);
  }

  deleteInterval(i: number) {
    this.intervalsForms.removeAt(i);
  }

  send() {
    console.log(this.profileForm.value);
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
