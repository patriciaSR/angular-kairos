import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleDirectivesComponent } from './example-directives/example-directives.component';



@NgModule({
  declarations: [ExampleDirectivesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleDirectivesComponent
  ]
})
export class DirectivesModule { }
