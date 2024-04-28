import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SerBackgroundDirective implements OnInit{
 // private element:ElementRef;
  constructor(private element:ElementRef,private renderer:Renderer2) { 
     // this.element = element;
  }
  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = "red";
    // this.element.nativeElement.style.color = "white"
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','red');
    this.renderer.setStyle(this.element.nativeElement,'color','white');
    this.renderer.setAttribute(this.element.nativeElement,"title","This is Title");
  }
}
