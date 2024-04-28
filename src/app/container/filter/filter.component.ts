import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all : number = 0;
  @Input()
  available:number = 0;
  @Input()
  notavailable:number = 0;
  @Output()
  selectedRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  selectedRadioButton : string = 'all';
  onSelectedButtonChangedEvent(){
    this.selectedRadioButtonChanged.emit(this.selectedRadioButton);
    console.log(this.selectedRadioButton);
  }
}
