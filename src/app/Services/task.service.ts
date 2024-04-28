import { Inject, Injectable, inject } from "@angular/core";
import { Task } from "../Models/Task";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { catchError, exhaustMap, map, retry, take } from "rxjs/operators";
import { response } from "express";
import { Subject, throwError } from "rxjs";
import { Loggerservice } from "./logger.service";
import { LoginService } from "./Login.Service";


@Injectable({
    providedIn:'root'
})
export class TaskService{
    httpClient : HttpClient = inject(HttpClient);
    loginService : LoginService = inject(LoginService)
    errorSubject = new Subject<HttpErrorResponse>();
    createTaskData(data:Task){
        this.httpClient.post<{name:string}>('https://httpclient-f188e-default-rtdb.firebaseio.com/task.json',
            data,{headers:{'my-header':'hello-word'}})
            .subscribe({error :(err)=>{
                this.errorSubject.next(err);
            }})
    }
    fetchAllTaskData(){
       return  this.httpClient.get('https://httpclient-f188e-default-rtdb.firebaseio.com/task.json')
       .pipe(map((response)=>{
        let task = [];
        for(let key in response){
          if(response.hasOwnProperty(key)){
            task.push({...response[key],id:key})
           }
        }
        return task;
    }),catchError((err)=>{
       return throwError(()=>err)
    }));
    }
    deleteTaskData(id){
        this.httpClient.delete('https://httpclient-f188e-default-rtdb.firebaseio.com/task/'+id+'.json')
        .subscribe({error: (err)=>{
            this.errorSubject.next(err);
        }})
    }
    updateTaskData(id:string | undefined ,data:Task){
        this.httpClient.put('https://httpclient-f188e-default-rtdb.firebaseio.com/task/'+id+'.json',data)
        .subscribe({ error : (err)=>{
            this.errorSubject.next(err)
        }})
    }
    deleteAllTaskData(){
        this.httpClient.delete('https://httpclient-f188e-default-rtdb.firebaseio.com/task.json')
        .subscribe({ error : (err)=>{
          this.errorSubject.next(err);
        }})
    }
    getTaskDetails(id:string | undefined){
       return this.httpClient.get('https://httpclient-f188e-default-rtdb.firebaseio.com/task/'+id+'.json')
        .pipe(map((response)=>{
            let task = {};
            task = {...response,id:id}
            return task;
        }))
    }
}