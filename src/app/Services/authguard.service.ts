import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { UserComponent } from "../user/user.component";
import { Products } from "../Models/product";
import { ProductService } from "./product.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements 
         CanActivate,CanActivateChild,CanDeactivate<UserComponent>,Resolve<Products[]>{
   
 
    authService:AuthService = inject(AuthService);
    router :Router = inject(Router);
    productService:ProductService = inject(ProductService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       if(this.authService.isAuthenticated()){
          return true;
       }else{
        this.router.navigate(['/login'])
        return false;
       }
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       return this.canActivate(childRoute,state);
    }
    canDeactivate(component: UserComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canExit();
   }
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Products[] | Observable<Products[]> | Promise<Products[]> {
   //    let productList:Products[] = [];
   //    this.productService.getAllProduct().subscribe((products:Products[])=>{
   //       productList = products
   //   });
   //   return productList;
       return this.productService.getAllProduct();
   }

}