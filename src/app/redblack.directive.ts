import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customStyleDirective]'
})
export class RedblackDirective {

  constructor(private el: ElementRef) { 
    console.log(el.nativeElement.offsetTop);
    el.nativeElement.style.color = 'orange';
    el.nativeElement.style.top = "200px";
    el.nativeElement.style.position = "relative"
  }

}
