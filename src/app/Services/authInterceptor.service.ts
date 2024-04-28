import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, exhaustMap, retry, take } from "rxjs";
import { LoginService } from "./Login.Service";

@Injectable({
    providedIn:'root'
})
export class AuthInterceptorService implements HttpInterceptor{
    loginService:LoginService = inject(LoginService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return this.loginService.loginModel.pipe(take(1),exhaustMap(user=>{
        if(!user){
            return next.handle(req);
        }
        const modifiedRequest = req.clone({
            params:new HttpParams().set('auth',user.token)
        })
        return next.handle(modifiedRequest);
      }))
      
    }

}