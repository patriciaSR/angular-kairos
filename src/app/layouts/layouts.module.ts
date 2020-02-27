import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SimpleComponent } from './simple/simple.component';



@NgModule({
  declarations: [SimpleComponent, AppLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SimpleComponent, AppLayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule { }
