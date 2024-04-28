import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  @ViewChild('regForm') form :NgForm;
  fullName:string = '';
  emailData : string = '';
  password : string = '';
  username : string = '';
   gender = [
    {id:1,value:'male',display:'male'},
    {id:2, value:'female',display:'female'},
    {id:3, value:'other',display:'other'}
   ]

  onFormSubmitted(){
    this.fullName = this.form.value.fname;
    this.emailData = this.form.value.email;
    this.password = this.form.value.pass;
    console.log(this.form.value.fname)
    this.form.reset();
    this.form.form.patchValue({
      gender:'male'
    })
  }
  generateUsername(){
    let username = '';
    if(this.fullName.length > 3){
       username += this.fullName.slice(0,3);
    }
    if(this.emailData.length>3){
      username += this.emailData.slice(0,3);
    }
    if(this.password.length>3){
      username += this.password.slice(0,3);
    }
    username = username.toLowerCase();
    // console.log(username);
    // this.form.controls['username'].value = username

    //setValue
    // this.form.setValue({
    //   name:this.form.value.name,
    //   email:this.form.value.email,
    //   pass:this.form.value.pass,
    //   username:username,
    //   gender:this.form.value.gender,
    //   confirmPass:this.form.value.pass,
    //   dob:this.form.value.dob,
    //   addressData:{
    //     address:this.form.value.address,
    //     city:this.form.value.city,
    //     state:this.form.value.state,
    //     zip:this.form.value.zip
    //    }
      
    // })
    this.form.form.patchValue({
      username:username
    })
  }
}
