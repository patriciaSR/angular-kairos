import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExampleDirectivesComponent } from './example-directives/example-directives.component';
import { ExampleDirectivesPipe } from './example-directives.pipe';



@NgModule({
  declarations: [ExampleDirectivesComponent, ExampleDirectivesPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ExampleDirectivesComponent
  ]
})
export class DirectivesModule { }
