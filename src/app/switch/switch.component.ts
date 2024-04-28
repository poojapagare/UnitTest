import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
   tab:string = '';
   getHome(){
    this.tab = 'home';
   }
   getAboutUs(){
    this.tab = 'aboutUs';
   }
   getContact(){
    this.tab = 'contact';
   }
}
