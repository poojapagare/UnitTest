import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit{
  ngOnInit(): void {
    
    const data = new AsyncSubject();
    data.next(100);
    data.next(200);
    data.next(300);
    data.complete();
    data.subscribe((val)=>{
      console.log(val);
    });
    data.subscribe((val)=>{
      console.log(val);
    });
    data.subscribe((data)=>{
      console.log(data);
    })
  }
   
}
