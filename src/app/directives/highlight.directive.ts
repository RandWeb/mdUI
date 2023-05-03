import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') highlight: string | null = null;

  /*
  * در سازنده به مقدار اینپوت های دسترسی نداریم
  * */
  constructor(private element: ElementRef) {
    /*    element.nativeElement.style.backgroundColor = this.Highlight;*/
  }

  ngOnInit(): void {
    console.log(this.highlight)
    this.element.nativeElement.style.backgroundColor = this.highlight != '' ? this.highlight:'#2cd2b8';
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'navy';
    this.element.nativeElement.style.color = 'white';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = 'green';
  }

}
