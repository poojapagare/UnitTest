import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
 
    selectedUser:User;
    constructor(@Inject('USER_SERVICE') private userService:UserService){}
    ngOnInit(): void {
      this.userService.onUserClicked.subscribe((data:User)=>{
          this.selectedUser = data;
      })
    }
}
