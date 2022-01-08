import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hideAfter]'
})
export class HideAfterDirective implements OnInit {

  @Input('hideAfter') delay = 0;
  @Input('hideAfterThen') placeholder: TemplateRef<any> | null = null;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    //must tell element to load
    this.viewContainerRef.createEmbeddedView(this.template);
    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.placeholder) {
        this.viewContainerRef.createEmbeddedView(this.placeholder);
      }
    }, this.delay)
  }

}
