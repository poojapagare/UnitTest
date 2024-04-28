import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Login } from '../Models/Login';
import { LoginService } from '../Services/Login.Service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnDestroy{

  
  loginService : LoginService = inject(LoginService);
  isLoggedIn:boolean = false;
  private userSubject:Subscription;
  ngOnInit(): void {
    this.userSubject = this.loginService.loginModel.subscribe((loginModel:Login)=>{
        this.isLoggedIn = loginModel ? true : false;

    }) 
  }
  ngOnDestroy(): void {
    this.userSubject.unsubscribe();
  }
  onLogout(){
    this.loginService.getLogout();
  }
}
