import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

Injectable({
    providedIn:'root'
})
export class LoggingService{
    httpClient:HttpClient = inject(HttpClient);
    logError(data:{statusCode:number,errorMessage:string,dateTime:Date}){
        this.httpClient.post('https://httpclient-f188e-default-rtdb.firebaseio.com/log.json',
        data).subscribe(()=>{

        })
    }
    fetchError(){
       this.httpClient.get('https://httpclient-f188e-default-rtdb.firebaseio.com/log.json')
       .subscribe((data)=>{
        console.log(data);
       })
    }
}