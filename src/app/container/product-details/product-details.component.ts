import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { Products } from 'src/app/Models/product';
import { ProductlistComponent } from '../productlist/productlist.component';
import { ActivatedRoute } from '@angular/router';
import { retry } from 'rxjs';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit,OnDestroy{
   
    productId:number;
    activatedRoute:ActivatedRoute = inject(ActivatedRoute);
    productService:ProductService = inject(ProductService);
    @Input() 
    productListComponent :ProductlistComponent = undefined;
    product:Products;
    paramapMapObs;
    ngOnInit(): void {
    // this.productId = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.product = this.productService.product.find(product => product.id === this.productId);
    this.paramapMapObs = this.activatedRoute.params.subscribe((data)=>{
      this.productId = +data['id'];
      this.product = this.productService.product.find(product => product.id === this.productId);
     })
    // this.product = this.productListComponent?.selectedProducts;
     }
     ngOnDestroy(): void {
        this.paramapMapObs.unsubscribe();
     }
}
