import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[edInput]'
})
export class EdInputDirective {

  @HostBinding('style.border-color') borderColor!: string;
  @HostBinding('style.padding') padding!: string;
  @HostBinding('style.border-radius') borderRadius!: string;

  @HostListener('focus') onClick($event: Event) {
    console.log($event)
  }

  @HostListener('blur') onBlur() {
    this.borderColor = 'blue'
  }


  constructor(

  ) {
    this.borderColor = '#dde0f6';
    this.padding = '5px 5px 5px 5px';
    this.borderRadius = '5px';

  }

}
