import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit{
  displayStyle = "none"; 
  @Input() currentTask:Task | null=null;
  ngOnInit(): void {
    this.displayStyle = "block"; 
  }
  okPopup(){
    this.displayStyle = "none";
  }
  closePopup() { 
    this.displayStyle = "none";
  }
}
