import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  activeRoute:ActivatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
     this.activeRoute.fragment.subscribe((data)=>{
      //console.log(data);
      this.jumpToSection(data);
     })
  }
  jumpToSection(section){
     document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
  }
  // router:Router = inject(Router);
  // activatedRouter:ActivatedRoute = inject(ActivatedRoute);
  // goToAsync(){
  //   this.router.navigate(['async'],{relativeTo:this.activatedRouter});
  //   //this.router.navigateByUrl('async');
  // }

}
