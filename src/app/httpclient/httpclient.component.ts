import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../Models/Task';
import { HttpClient } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import { response } from 'express';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HTTPClientComponent implements OnInit{
   isShowTaskDetails : boolean = false;
   currentTask : Task | null = null;
   isEditTask:boolean = false;
   showCreateTaskModal:boolean = false;
   taskService : TaskService = inject(TaskService);
   allTask:Task[] = [];
   selectedTask:Task;
   errorMessage: string;
   currentTaskId: string = '';
   isLoading:boolean = false;
   ngOnInit(): void {
     this.featchTaskModal();
   }
   openTaskModal(){
    this.showCreateTaskModal = true;
    this.isEditTask = false;
    this.selectedTask = {fname:'',lname:''}
   }
   createOrUpdateTask(data:Task){
    if(!this.isEditTask)
       this.taskService.createTaskData(data);
    else
      this.taskService.updateTaskData(this.currentTaskId,data);
   }
   featchTaskModal(){
      this.isLoading = true;
      this.taskService.fetchAllTaskData().subscribe((task)=>{
          this.allTask = task;
          this.isLoading = false;
      },(err)=>{
         this.errorMessage = err.message;
         this.isLoading = false;
         setTimeout(()=>{
            this.errorMessage = null;
         },3000);
      })
    
   }
   deleteTask(id:string | undefined){
    this.taskService.deleteTaskData(id);
   }
   updateTask(id:string | undefined){
    this.currentTaskId = id;
     this.showCreateTaskModal = true;
     this.isEditTask = true;
     this.selectedTask = this.allTask.find((task)=>{
        return task.id === id
     })
   }
   taskDetails(id:string | undefined){
      this.isShowTaskDetails = true;
      this.taskService.getTaskDetails(id).subscribe((task)=>{
         this.currentTask = task;
     })
   }
   deleteTaskModal(){
    this.taskService.deleteAllTaskData();
   }
   closeFormData(){
    this.showCreateTaskModal = false;
   }
}
