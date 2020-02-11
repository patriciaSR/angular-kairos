import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';
import { ExampleDirectivesComponent } from './example-directives/example-directives.component';



@NgModule({
  declarations: [ExampleDirectivesComponent],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ExampleDirectivesComponent
  ]
})
export class DirectivesModule { }
