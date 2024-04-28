import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
    //styles:['h3{color:red;background-color:yellow}']
})
export class HeaderComponent{
    studName : string[] =["Pooja","Sima","Asha","Rinku"];
    cartVal=0;
    searchValue= "Laddies Shirts"
     product = {
        pimg:"/assets/heart.png",
        isStock:10
     }
     name:string = "Sima";
     updateSeatchText(event:any){
        this.searchValue = event.target.value;
     }
     getName(event:any){
       console.log(event.target.value);
     }
     addTocart(){
         if(this.cartVal<this.product.isStock){
            this.cartVal++;
         }
     }
     removeCart(){
        this.cartVal--;
     }
} 