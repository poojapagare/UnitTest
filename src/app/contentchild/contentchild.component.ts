import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { NgContentComponent } from '../ng-content/ng-content.component';

@Component({
  selector: 'app-contentchild',
  templateUrl: './contentchild.component.html',
  styleUrls: ['./contentchild.component.css']
})
export class ContentchildComponent {
 // @ContentChild('heading') headingEl : ElementRef; 
   @ContentChildren('heading') headingEl : QueryList<ElementRef>
  @ContentChildren(NgContentComponent) contentEl : QueryList<NgContentComponent>;
  getContent(){
     // console.log(this.headingEl);
      // console.log(this.contentEl);
      // this.headingEl.forEach((el)=>{
      //   console.log(el);
      // });
      this.contentEl.forEach((el)=>{
        console.log(el.name);
      })
  }
}
