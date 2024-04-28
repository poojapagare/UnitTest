import { Component, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{


  productService:ProductService = inject(ProductService);
  totalProducts;


    //search Text
    @Input()
    searchText:string = ''; 
    totalProduct = this.productService.product.length;
    isAvailable = this.productService.product.filter(p => p.available === true).length;
    notAvailable = this.productService.product.filter(p => p.available === false).length; 
    selectedCategory:string = 'all';
  
    ngOnInit(): void {
      this.totalProducts = new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve(this.productService.product.length);
          },2000)
      })
    }
  
    onFilterChanged(event:any){
      this.selectedCategory = event
      console.log(event);
    }
    onFilterValueChanged(event:any){
       console.log(event.target.value);
    }
  }