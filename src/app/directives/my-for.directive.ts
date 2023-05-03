import {Directive, Input, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appMyFor][myForOf]'
})
export class MyForDirective {

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) {
  }

  @Input()
  set myForOf(collection:Array<any>) {
    this.view.clear();
    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index
      });
    });
  }
}
