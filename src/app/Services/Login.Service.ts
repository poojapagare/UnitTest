import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { LoginResponse } from "../Models/LoginResponse";
import { BehaviorSubject, Subject, catchError, throwError } from "rxjs";
import { Login } from "../Models/Login";
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { environment } from "src/environments/environment.development";

@Injectable({
    providedIn:'root'
})
export class LoginService{
  http:HttpClient = inject(HttpClient);
  loginModel = new BehaviorSubject<Login>(null);
  error : string | null = null;
  router : Router = inject(Router);
  private tokenExpireTime : any;
  getRegister(email,password){
    const data = {email:email,password:password,returnSecureToken:true};
    return this.http.post<LoginResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.frebaseApiKey,
    data).pipe(catchError(err=>{
        this.handleError(err);
        return throwError(()=>err)
    }),tap((res)=>{
        this.handleLoginResponse(res)
    }))
  }
  getLogin(email,password){
    const data = {email:email,password:password,returnSecureToken:true};
    return this.http.post<LoginResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.frebaseApiKey,
    data).pipe(catchError(err=>{
        console.log(err);
         this.handleError(err);
         return throwError(()=>err)
    }),tap((res)=>{
      this.handleLoginResponse(res)
    }))
  }
  getLogout(){
    this.loginModel.next(null);
    this.router.navigate(['/login']);
    //localStorage.clear();
    localStorage.removeItem('user');
    if(this.tokenExpireTime){
      clearTimeout(this.tokenExpireTime);
    }
    this.tokenExpireTime = null;
  }
  autoLogin(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user){
      return;
    }
    const loggedUser = new Login(user.email,user.id,user._token,user.expiredIn)
    if(loggedUser.token){
      user.next(loggedUser);
      const timerValue = user.expiredIn.getTime() - new Date().getTime();
      this.autoLogout(timerValue)
    }
  }
  autoLogout(expireTime:number){
     this.tokenExpireTime = setTimeout(()=>{
        this.getLogout();
      },expireTime)
  }
  handleLoginResponse(res){
    const expireIn = new Date().getTime() + +res.expiresIn *1000;
    const expiredIn = new Date(expireIn);
      const user = new Login(res.email,res.localId,res.idToken,expiredIn);
      this.loginModel.next(user);
      localStorage.setItem('user',JSON.stringify(user));
      //this.autoLogout(res.expiredIn * 1000);
  }
 
  handleError(err){
    switch(err.error.error.message){
        case 'EMAIL_EXISTS':
              this.error = 'This email is already exist';
              break;
        case 'OPERATION_NOT_ALLOWED':
              this.error = 'This operation is not allowed';  
              break;
        case 'INVALID_EMAIL':
              this.error = 'This is Invalid Email';
              break;        
    }
  
  }
}