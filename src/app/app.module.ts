import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';



import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { ContainerComponent } from './container/container.component';
import { ProductComponent } from './container/product/product.component';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { SearchComponent } from './container/search/search.component';
import { FilterComponent } from './container/filter/filter.component';
import { ViewChildrenComponent } from './container/view-children/view-children.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ContentchildComponent } from './contentchild/contentchild.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { SerBackgroundDirective } from './directives/ser-background.directive';
import { HeighliteDirective } from './directives/heighlite.directive';
import { HostbindingDirective } from './directives/hostbinding.directive';
import { PropvshostComponent } from './propvshost/propvshost.component';
import { SampleDirective } from './directives/sample.directive';
import { StyleDirective } from './directives/style.directive';
import { CostumDirectiveComponent } from './costum-directive/costum-directive.component';
import { IfconditionDirective } from './directives/ifcondition.directive';
import { SwitchComponent } from './switch/switch.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { UserComponent } from './user/user.component';
import { Subscriber } from 'rxjs';
import { SubscriberService } from './Services/subscriber.service';
import { UserService } from './Services/user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ObservableComponent } from './observable/observable.component';
import { MapComponent } from './map/map.component';
import { FilterObserverComponent } from './filterObserver/filterObserver.component';
import { SubjectObservableComponent } from './subject-observable/subject-observable.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { RouterModule } from '@angular/router';

import { RouterTestingModule } from "@angular/router/testing";
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PercentagePipe } from './pipes/percentage.pipe';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { ConfirmDeleteComponent } from './user/confirm-delete/confirm-delete.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HTTPClientComponent } from './httpclient/httpclient.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CreateTaskComponent } from './httpclient/create-task/create-task.component';

import { AuthInterceptorService } from './Services/authInterceptor.service';
import { TaskDetailsComponent } from './httpclient/task-details/task-details.component';
import { LogingInterceptorService } from './Services/LoginInterceptor.service';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    ContainerComponent,
    ProductDetailsComponent,
    SearchComponent,
    ProductComponent,
    ProductlistComponent,
    FilterComponent,
    ViewChildrenComponent,
    NgContentComponent,
    ContentchildComponent,
    LifecycleHookComponent,
    SerBackgroundDirective,
    HeighliteDirective,
    HostbindingDirective,
    PropvshostComponent,
    SampleDirective,
    StyleDirective,
    CostumDirectiveComponent,
    IfconditionDirective,
    SwitchComponent,
    Compo1Component,
    Compo2Component,
    UserComponent,
    UserDetailsComponent,
    ObservableComponent,
    MapComponent,
    FilterObserverComponent,
    SubjectObservableComponent,
 
    ReplaySubjectComponent,
   
    UnsubscribeComponent,
    NavigationComponent,
   HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    CheckoutComponent,
    PercentagePipe,
    SearchCategoryComponent,
    ConfirmDeleteComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    HTTPClientComponent,
    CreateTaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    RouterTestingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    SharedModule
  ],
  providers: [SubscriberService,{provide:'USER_SERVICE',useClass:UserService},
     {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true},
     {provide:HTTP_INTERCEPTORS,useClass:LogingInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
