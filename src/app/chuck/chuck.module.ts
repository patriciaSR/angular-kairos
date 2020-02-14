import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckComponent } from './chuck/chuck.component';

const ROUTES: Routes = [
  { path: '', component: ChuckComponent },
];

@NgModule({
  declarations: [ChuckComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ChuckModule { }
