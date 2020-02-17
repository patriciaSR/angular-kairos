import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { ChuckService } from './chuck/chuck.service';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LayoutsModule } from './layouts/layouts.module';
import { SimpleComponent } from './layouts/simple/simple.component';
import { SecondServiceFake } from './second-fake.service copy';
import { SecondService } from './second.service';

const config = {
  api: 'http://localhost:3001'
};

const ROUTES: Routes = [
  { path: '', redirectTo: 'directives', pathMatch: 'full' },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'directives',
        loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
      },
      {
        path: 'databinding', canActivate: [AuthService],
        loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
      },
      {
        path: 'chuck', canActivate: [AuthService],
        loadChildren: () => import('./chuck/chuck.module').then(m => m.ChuckModule)
      }
    ]
  },
  {
    path: 'login',
    component: SimpleComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
  ,
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    AuthModule,
    HttpClientModule,
    // DirectivesModule,
    // DataBindingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: SecondService, useClass: SecondServiceFake },
    { provide: 'config', useValue: config },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    ChuckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
