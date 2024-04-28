import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "../Services/Login.Service";
import { inject } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";


export const canActivate = (router:ActivatedRouteSnapshot,
    state : RouterStateSnapshot):boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> =>{
   const loginService = inject(LoginService);
  const route = inject(Router);
   return loginService.loginModel.pipe(map((loginModel)=>{
      const loggedIn = loginModel ? true : false;
      if(loggedIn){
        return true;
      }else{
        return route.createUrlTree(['/login'])
      }
   }))
}