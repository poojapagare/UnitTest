import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Models/Task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit,AfterContentInit{

  @Input() selectedTask: Task;
  @ViewChild('taskForm') taskForm : NgForm;
  @Input() isEditMode:boolean = false;
  displayStyle = "none"; 
  @Output() closeForm :EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emitTaskData :EventEmitter<Task> = new EventEmitter<Task>();
  ngOnInit(): void {
      this.displayStyle = "block"; 
  }
  ngAfterContentInit(): void {
    setTimeout(()=>{
      this.taskForm.form.patchValue(this.selectedTask);
    },0);
  }
  getSubmittedForm(form:NgForm){
    this.emitTaskData.emit(form.value);
    this.displayStyle = "none";
     console.log(form.value);
  }

  closePopup() { 
    this.closeForm.emit(false);
    this.displayStyle = "none";
   
  } 
}
