import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfcondition]'
})
export class IfconditionDirective {

  constructor(private view:TemplateRef<any>,private template: ViewContainerRef) { }
  
  @Input() set appIfcondition(condition:boolean){
    if(condition){
      this.template.createEmbeddedView(this.view);
    }else{
      this.template.clear();
    }
  }
}
