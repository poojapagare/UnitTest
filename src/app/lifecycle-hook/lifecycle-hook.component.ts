import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements 
          OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,
          AfterViewInit,AfterViewChecked,OnDestroy{
     ngOnChanges(changes: SimpleChanges): void {
       console.log("ngOnChanges Called!!!");
     }
     ngOnInit(): void {
       console.log("OnInit Called!!!");
     }
     ngDoCheck(): void {
      console.log('ngDoCheck Called!!!');
    }
    ngAfterContentInit(): void {
      console.log('ngAfterContentInit Called!!!');
    }
    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked Called!!!');
    }
    ngAfterViewInit(): void {
      console.log('ngAfterViewInit Called!!!');
    }
    ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked Called!!!');
    }
    ngOnDestroy(): void {
      console.log('ngAfterDestroy Called!!!');
    }
}
