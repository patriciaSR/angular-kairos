import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { SecondServiceFake } from './second-fake.service copy';
import { SecondService } from './second.service';

const config = {
  api: 'http://back'
};

const ROUTES: Routes = [
  { path: '', redirectTo: 'directives', pathMatch: 'full' },
  { path: 'directives', loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule) },
  {
    path: 'databinding', canActivate: [AuthService],
    loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // DirectivesModule,
    // DataBindingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: SecondService, useClass: SecondServiceFake },
    { provide: 'config', useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
