import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { DirectivesModule } from './directives/directives.module';
import { SecondServiceFake } from './second-fake.service copy';
import { SecondService } from './second.service';

const config = {
  api: 'http://back'
};

const ROUTES: Routes = [
  { path: '', redirectTo: 'directives', pathMatch: 'full' },
  { path: '**', redirectTo: 'directives'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    DataBindingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: SecondService, useClass: SecondServiceFake },
    { provide: 'config', useValue: config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
