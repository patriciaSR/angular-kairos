import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthInterceptorService } from '../auth/auth-interceptor.service';
import { ChuckService } from './chuck.service';
import { ChuckComponent } from './chuck/chuck.component';

const ROUTES: Routes = [
  { path: '', component: ChuckComponent },
];

@NgModule({
  declarations: [ChuckComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule
  ],
  providers: [
    ChuckService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class ChuckModule { }
