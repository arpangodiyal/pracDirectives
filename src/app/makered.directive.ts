import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMakered]'
})
export class MakeredDirective {

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.background = "red";
  }

}