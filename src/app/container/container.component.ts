import { Component, Input, OnInit, ViewChild, inject } from '@angular/core';
import { ProductlistComponent } from './productlist/productlist.component';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../Models/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent{
  selectedProducts : Products[];
  productService:ProductService = inject(ProductService);
  searchProduct:string;
  activatedRoute:ActivatedRoute = inject(ActivatedRoute);
  @Input()
  searchText:string = ''; 
  @Input() selectedProdcutsList;
  product:Products[];
  @ViewChild(ProductlistComponent) productListComponent:ProductlistComponent;
  ngOnInit(): void {
    // this.searchProduct = this.activatedRoute.snapshot.queryParams['search'];
    // console.log(this.searchProduct);
  //  this.searchProduct = this.activatedRoute.snapshot.queryParamMap.get('search');
      this.activatedRoute.queryParams.subscribe((data)=>{
        this.searchProduct  = data['search'];
        if(this.searchProduct === undefined || this.searchProduct === '' || this.searchProduct === null){
          //this.selectedProducts = this.productService.product;
            //  this.productService.getAllProduct().subscribe((data:Products[])=>{
            //   this.selectedProducts = data;
            //  })
           this.selectedProdcutsList = this.activatedRoute.snapshot.data['products']
          }else{
            this.selectedProducts = this.productService.product.filter
                            (x => x.title.toLowerCase().includes
                            (this.searchProduct.toLowerCase()));
            console.log(this.selectedProducts)               
          }
      })
   }

  getSearchText(value:string){
     this.searchText = value;
  }
  
}
