import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[CustonInput]'
})
export class CustonInputDirective implements OnChanges {

  @Input() classList!: string[];

  constructor(
    private ElementRef: ElementRef,
    private renderer: Renderer2
  ) {
   }

   private setClass(classList: string[]) {
    const classData: string[] = [
      'custom-input'
    ];
    const newClassData = classData.concat(classList);

    newClassData.forEach(element => {
      this.renderer.addClass(this.ElementRef.nativeElement, element);
    })
   }

   ngOnChanges(): void {
    this.setClass(this.classList);
   }

}
