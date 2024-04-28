import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { User } from 'src/app/Models/user';
import { ModalService } from 'src/app/Services/modal.service';
@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit{
  @Input() userDelete : User;
  displayStyle = "none"; 
  ngOnInit(): void {
      this.displayStyle = "block"; 
  }
  

  @Output() onClickUserDelete : EventEmitter<Boolean> = new EventEmitter<Boolean>();
  okPopup(value:boolean){
    this.displayStyle = "none";
    this.onClickUserDelete.emit(value);
    
  }
  closePopup(value:boolean) { 
    this.displayStyle = "none";
    this.onClickUserDelete.emit(value); 
  } 
}
