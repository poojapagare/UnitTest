import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class NameService{
   // createName:EventEmitter<string> = new EventEmitter<string>();
    createName = new Subject<string>();

    onCreateTask(name:string){
      //  this.createName.emit(name);
      this.createName.next(name);
    }
   
}