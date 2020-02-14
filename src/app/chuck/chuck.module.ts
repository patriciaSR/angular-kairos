import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckService } from './chuck.service';
import { ChuckComponent } from './chuck/chuck.component';

const ROUTES: Routes = [
  { path: '', component: ChuckComponent },
];

const config = {api: 'http://localhost:3001/api/random-quote'};

@NgModule({
  declarations: [ChuckComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule
  ],
  providers: [{provide: 'config', useValue: config}, ChuckService]
})
export class ChuckModule { }
