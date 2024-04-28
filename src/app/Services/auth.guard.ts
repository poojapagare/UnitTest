import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { ProductService } from "./product.service";

export const canActivate = () =>{
    const authService = inject(AuthService);
    const router = inject(Router);
    if(authService.isAuthenticated()){
        return true;
     }else{
      router.navigate(['/login'])
      return false;
     }
} 
export const canActivateChild = () =>{
    return canActivate();
}

export const resolve = () =>{
    const productService = inject(ProductService);
    return productService.getAllProduct();
}