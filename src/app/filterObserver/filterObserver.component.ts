import { Component } from '@angular/core';
import { filter, from, map, retry } from 'rxjs';

@Component({
  selector: 'app-filterObserver',
  templateUrl: './filterObserver.component.html',
  styleUrls: ['./filterObserver.component.css']
})
export class FilterObserverComponent {
  data:any;
  myObservable = from([2,4,6]).pipe(map((val)=>{
    return val * 4;
  }),(filter((val)=>{
    return val%4 === 0;
  })))
  // myTranform = this.myObservable.pipe(map((val:any)=>{
  //    return val * 4;
  // }))

  // myTranformObs = this.myTranform.pipe(filter((val)=>{
  //    return val%4 === 0;
  // }))

  getData(){
      this.myObservable.subscribe((val:any)=>{
          this.data = val;
      })
  }
}
