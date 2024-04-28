import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit{
  ngOnInit(): void {
    const subject = new BehaviorSubject<number>(100);
    subject.subscribe((data)=>{
       console.log(data)
    })
    subject.next(3020);
  }
  
}
