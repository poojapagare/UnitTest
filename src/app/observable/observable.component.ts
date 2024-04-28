import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements AfterViewInit{

  data:any[] =[];
  @ViewChild('createEvent') createEventEl:ElementRef;
  onBtnClick(){
    fromEvent(this.createEventEl.nativeElement,'click').subscribe((data)=>{
         console.log(data);
    })
  }
   
  ngAfterViewInit(): void {
    this.onBtnClick()
  }

  promises = new Promise((resolve,reject)=>{
       resolve([10,20,30]);
  });
  myObservable = from(this.promises);
  getAsyncData(){
     this.myObservable.subscribe((val:any)=>{
         this.data = val;
         console.log(val);
     },(err)=>{
       alert(err.message);
     },()=>{
        alert("Completed!!!")
     })

    
  }
  //Of Operator: 
  // data:any[] =[1,2,3,4,5]
  // myObservable = of(this.data);

  // getAsyncData(){
  //      this.myObservable.subscribe((val:any)=>{
  //         this.data.push(val);
  //         console.log(val);
  //      },(err)=>{
  //         alert(err.message);
  //      },()=>{
  //         alert("Complted!!!");
  //      })
  // }
    // data:any[] = [];
    // myObservable =  new Observable((observer)=>{
    //      setTimeout(()=>observer.next(1),1000);
    //      setTimeout(()=>observer.next(2),1000);
    //      setTimeout(()=>observer.error(new Error('something wents wrong!!')),3000);
    //      setTimeout(()=>observer.next(3),1000);
    //      setTimeout(()=>observer.complete(),1000);
    // })
    // getAsyncData(){
    //   this.myObservable.subscribe((val:any)=>{
    //        this.data.push(val);
    //   },(err)=>{
    //     alert(err.message)
    //   },()=>{
    //     alert("Completed!!")
    //   })
    // }
}
