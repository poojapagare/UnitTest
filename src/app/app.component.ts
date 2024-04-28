import { Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { SubscriberService } from './Services/subscriber.service';
import { NameService } from './Services/name.service';
import {ajax} from 'rxjs/ajax';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError} from '@angular/router';
import { LoginService } from './Services/Login.Service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  loginService: LoginService = inject(LoginService);
  showLoading:Boolean = false;
  router:Router = inject(Router);
  //spinner Show/Not

  task:string[] = ["Pooja","Sima","Asha"]
  title = 'app works!';
  data:any;
  nameService : NameService = inject(NameService);
  ngOnInit(): void {
    //auto login
    this.loginService.autoLogin();
    //spinner start and end
    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
          this.showLoading = true
      }
      if(routerEvent instanceof NavigationEnd 
       || routerEvent instanceof NavigationCancel
       || routerEvent instanceof NavigationError){
         this.showLoading = false;
      }
    })
    /*********spinner start and end*********** */

    this.data = ajax('https://jsonplaceholder.typicode.com/users');
    this.data.subscribe((res)=>{
        console.log(res)
    })
    this.data.subscribe((res)=>{
        console.log(res)
    })
    this.data.subscribe((res)=>{
      console.log(res)
    })
    this.nameService.createName.subscribe((value)=>{
          this.task.push(value);
    })
  }
  getSubscribe(){
    let subscribe = new SubscriberService();
    subscribe.onSubscribe('monthly');
  }
 
}
