import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviorSubject } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContainerComponent } from './container/container.component';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService } from './Services/authguard.service';
import { canActivateChild,resolve } from './Services/auth.guard';
import { UserComponent } from './user/user.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HTTPClientComponent } from './httpclient/httpclient.component';
import { canActivate } from './RouteGuard/authGuard';



export const routes: Routes = [
   {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'home',component : HomeComponent,canActivate:[canActivate]},
   {path:'async',component:AsyncSubjectComponent},
   {path:'behav',component:BehaviorSubjectComponent},
   {path:'template',component :TemplateFormComponent},
   {path:'httpClient',component :HTTPClientComponent},
   {path:'react',component:ReactiveFormComponent},
   {path:'prod',component:ContainerComponent,resolve:{products:resolve}},
   {path:'user',component:UserComponent, canDeactivate:[(comp:UserComponent)=>{return comp.canExit()}]},
   {path:'prod',canActivateChild:[canActivateChild], children:[
     {path:'prod/:id', component:ProductDetailsComponent},
     {path:'prodlist', component:ProductlistComponent},
     {path:'checkout',component:CheckoutComponent}
   ]},
   {path:'login',component:LoginComponent},
  //  {path:'prod/prod/:id',component:ProductDetailsComponent},
   {path:'**',component:PageNotFoundComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
