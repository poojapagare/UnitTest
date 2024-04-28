import { Component, Input, OnInit } from '@angular/core';
import { ProductlistComponent } from '../container/productlist/productlist.component';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit{

  @Input() 
  prod;
  ngOnInit(): void {
     this.prod = this.prod.category;
  }
}
