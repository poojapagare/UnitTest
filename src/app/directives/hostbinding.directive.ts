import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
  @HostBinding('style.backgroundColor') backgroundColor:string = 'pink';
  @HostBinding('style.border') border:string = "1px solid black";
}
