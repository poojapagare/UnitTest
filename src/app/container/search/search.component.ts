import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  router:Router = inject(Router);
  searchText:string = '';
    @Output()
     onSearchTextChanged:EventEmitter<string> = new EventEmitter<string>();
     @ViewChild('searchTextVal',{static:true}) searchTextEl : ElementRef;
    // onSearchText(){
    //    this.onSearchTextChanged.emit(this.searchText);
    // }
    // updateSeatchText(){
    //     //console.log(inputEl.value);
    //     this.searchText = this.searchTextEl.nativeElement.value;
    //     this.onSearchTextChanged.emit(this.searchText)
    // }
    OnSearchClicked(){
        this.searchText = this.searchTextEl.nativeElement.value;
        this.onSearchTextChanged.emit(this.searchText)
        this.router.navigate(['/prod'],{queryParams:{search:this.searchText}})
    }
}
