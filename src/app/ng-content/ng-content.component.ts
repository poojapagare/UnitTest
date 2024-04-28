import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent {
  title:string = "Hello Title";
  @Input() message:string = 'Hello';
  constructor(){
    console.log("Constructor Called!!!");
    console.log(this.title);
    console.log(this.message);
  }
  @Input() name:string = "Pooja";
}
