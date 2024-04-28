import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit{
  ngOnInit(): void {
    const data = new ReplaySubject<number>();
    data.next(100);
    data.next(200);
    data.next(300);
    data.subscribe((val)=>{
        console.log(val)
    })
    data.subscribe((val)=>{
      console.log(val);
    })
    data.subscribe((val)=>{
      console.log(val);
    })
  }
  
}
