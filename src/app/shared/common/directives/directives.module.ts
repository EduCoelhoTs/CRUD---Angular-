import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustonInputDirective } from './custon-input.directive';



@NgModule({
  declarations: [
    CustonInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustonInputDirective
  ]
})
export class DirectivesModule { }
