import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[checkNum]'
})
export class CheckNumDirective implements OnInit {

  @Input() defaultValue: any;
  @Input() successColor = '';

  constructor( private eRef: ElementRef) { }

  ngOnInit(): void {
    this.eRef.nativeElement.value = this.defaultValue;
  }

  @HostListener('keyup') onkeyup() {
    const el = this.eRef.nativeElement;
    if (el.value < 0 || el.value > 5) {
      el.style.backgroundColor = 'red'
    } else {
      el.style.backgroundColor = this.successColor;
    }
  }

}
