import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdInputDirective } from './ed-input.directive';



@NgModule({
  declarations: [
    EdInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EdInputDirective
  ]
})
export class DirectivesModule { }
