import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent {
    fullName:string = '';
    @ViewChildren('name') inputElement : QueryList<ElementRef>;
    show(){
       let name = '';
       this.inputElement.forEach((el)=>{
        name += el?.nativeElement.value + ' ';
             console.log(el.nativeElement.value)
       });
       this.fullName = name.trim();
    }
}
