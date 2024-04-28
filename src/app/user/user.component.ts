import { Component, Inject, OnInit, inject } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Models/user';
import { ModalService } from '../Services/modal.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // providers:[UserService]
})
export class UserComponent implements OnInit{
    fname:string = '';
    lname:string = '';
    fullName:any;
    userDelete : User;
    isSubmitted:Boolean = false;
    showConfirmDeleteComponent:boolean = false;
    modelService:ModalService = inject(ModalService);
    constructor(@Inject('USER_SERVICE') private userService:UserService){}
   //constructor(private userService:UserService){}
    ngOnInit(): void {
      this.fullName = this.userService.getFullName()
    }
    saveUser(){
      this.isSubmitted = true
      this.userService.addUser(this.fname,this.lname);
      console.log(this.userService.user);
    }
    canExit(){
      if((this.fname || this.lname) && !this.isSubmitted){
        return confirm('You have usnsaved changes Do you want to navigate')
      }else{
        return true;
      }
    }
    showUserDetails(user:User){
       this.userService.getUserDetails(user)
    }
    getDeleteUser(user : User){
        this.showConfirmDeleteComponent = true;
        this.userDelete = user;
    }
    
    onUserDeleteConfirm(value:boolean){
        this.showConfirmDeleteComponent = false;
        if(value){
          let index = this.userService.user.indexOf(this.userDelete);
          console.log(value);
          this.userService.user.splice(index,1);
        }
    }
}
