import { Injectable, inject } from "@angular/core";
import { UserService } from "./user.service";
import { text } from "@fortawesome/fontawesome-svg-core";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    isLogged:Boolean = false;
    userService:UserService = inject(UserService);
    login(fname:string,lname:string){
      let user =  this.userService.user.find(u => u.fname === fname && u.lname === lname);
      if(user === undefined){
        this.isLogged = false
      }else{
        this.isLogged = true;
      }
      return user;
    }
    logout(){
        this.isLogged = false;
    }
    isAuthenticated(){
        return this.isLogged;
    }
}