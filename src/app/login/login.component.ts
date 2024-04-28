import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { LoginService } from '../Services/Login.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
errorMessage:string | null = null;
   isLoading:boolean = false;
   isLoginMode:boolean = true;
   loginService:LoginService = inject(LoginService);
   @ViewChild('fname') fname: ElementRef;
   @ViewChild('lname') lname: ElementRef;
   router: Router = inject(Router);
   authSevice : AuthService = inject(AuthService);
   activatedRoute : ActivatedRoute = inject(ActivatedRoute);
   ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((data)=>{
      const logout = Boolean(data.get('logout'));
      if(logout){
        this.authSevice.logout();
        alert('You are not logged out = ' + this.authSevice.isLogged)
      }
    })
   }
   getLogin(form:NgModel){
    const email = form.value.email;
    const password = form.value.password;
    
    if(this.isLoginMode){
        this.isLoading = true;
        this.loginService.getLogin(email,password).subscribe({
          next : (response) =>{ 
            console.log(response); 
            this.isLoading = false;
            this.router.navigate(['/home']);
          },
          error : (err) => { 
            console.log(err);  
            this.isLoading = false;
            this.errorMessage = err.message;
            setTimeout(()=>{
              this.errorMessage = null;
            },3000)
          }
        })
    }else{
        this.isLoading = true;
        this.loginService.getRegister(email,password).subscribe({
          next : (response) =>{ console.log(response); this.isLoading = false;},
          error : (err) => { 
            console.log(err);  
            this.isLoading = false;
            this.errorMessage = err.message;
            setTimeout(()=>{
              this.errorMessage = null;
            },3000)
          }
        })
    }
    form.reset();
   
    // const fname = form.name.value;
    // const lname = form.lname.value;
    // let user = this.authSevice.login(fname,lname);
    // if(user === undefined){
    //   alert('The Login Credential is not correct');
    // }else{
    //   alert(`This Welcome ${fname} Your Login Success!!`)
    //   this.router.navigate(['/home']);
    // }
   }
   getRegister(){
    this.isLoginMode = !this.isLoginMode;
   }
}
