import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../Models/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  activeRoute:ActivatedRoute = inject(ActivatedRoute);
  router:Router = inject(Router);
  product;
  ngOnInit(): void {
    //pass static data
      // this.activeRoute.data.subscribe((data)=>{
      //      this.product = data;
      // })
    // this.product = this.router.getCurrentNavigation().extras.state;
    this.product = history.state;
  }

}
