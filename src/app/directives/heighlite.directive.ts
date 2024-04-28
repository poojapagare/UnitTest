import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeighlite]'
})
export class HeighliteDirective {

  constructor(private elementRef :ElementRef,private renderer : Renderer2) {

  }
  @HostListener('mouseenter') onMouseEnter(){
      this.renderer.addClass(this.elementRef.nativeElement,'zoom')
  }
  @HostListener('mouseout') onMouseOut(){
     this.renderer.removeClass(this.elementRef.nativeElement,'zoom')
  }
}
