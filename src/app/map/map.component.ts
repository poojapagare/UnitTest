import { Component } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
    data:any[] = [];

    // promises = new Promise((resolve,reject)=>{
    //   resolve()
    // });
    myObservable = from([1,2,3,4,5]);

    myTransform = this.myObservable.pipe(map((val:any)=>{
             return val * 5;
    }));
    getData(){
      this.myTransform.subscribe((val:any)=>{
          this.data.push(val);
          console.log(val);
      })
    }
}
