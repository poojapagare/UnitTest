import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {
  @Input() bgColor:string = 'red';
  textColor : string = 'white';
  constructor(private element:ElementRef,private renderer : Renderer2) { }
  @HostBinding('value') inputVal:string = 'Hi There';
  @HostListener('focus') getLog(){
    console.log("Focus Logged!!!");
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.bgColor);
    this.renderer.setStyle(this.element.nativeElement,'color',this.textColor);
  }
  @Input() set display(value:Object){
     let entries = Object.entries(value);
     for(let item of entries){
      console.log(item[0],item[1])
     }
  }
}
