import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../Validators/nospace.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
   formData:any = {};
    form:FormGroup; 
    formStatus:string;
    ngOnInit(): void {
      this.form = new FormGroup({
         fname : new FormControl(null,[Validators.required,CustomValidators.noSpaceAllowed]),
         email : new FormControl(null,[Validators.required,CustomValidators.noSpaceAllowed]),
         pass: new FormControl(null,[Validators.required,CustomValidators.noSpaceAllowed]),
         confPass : new FormControl(null,[Validators.required,CustomValidators.noSpaceAllowed]),
         username : new FormControl(null,[Validators.required]),
         gender : new FormControl('male'),
         dob : new FormControl(null,Validators.required),
         address : new FormGroup({
            addr : new FormControl(null,Validators.required),
            state : new FormControl(null,Validators.required),
            zip : new FormControl(null,Validators.required)
         }),
         skills:new FormArray([
            new FormControl(null,Validators.required)
         ])
      })
      
      // this.form.get('fname').valueChanges.subscribe((value)=>{
      //      console.log(value);
      // })
      // this.form.valueChanges.subscribe((data)=>{
      //    console.log(data);
      // })
      // this.form.get('email').statusChanges.subscribe((status)=>{
      //    console.log(status);
      // })
      this.form.statusChanges.subscribe((data)=>{
         console.log(data);
         this.formStatus = data;
      });
     
    }
    createUsername(){
      let username = '';
      let fname = this.form.get('fname').value;
      let email = this.form.get('email').value;
      let pass = this.form.get('pass').value;
      if(fname.length >= 3){
         username += fname.slice(0,3);
      }
      if(email.length >= 3){
          username += email.slice(0,3);
      }
      if(pass.length >= 3){
         username += pass.slice(0,3);
      }
      username = username.toLowerCase();
      console.log(username);
      // this.form.setValue({
      //    fname: this.form.get('fname').value,
      //    email:this.form.get('email').value,
      //    pass: this.form.get('pass').value,
      //    confPass: this.form.get('confPass').value,
      //    username : username,
      //    gender:'',
      //    dob:'',
      //    address:{
      //       addr: this.form.get('address.addr').value,
      //       state: this.form.get('address.state').value,
      //       zip: this.form.get('address.zip').value,
           
      //    },
      //    skills: this.form.get('skills').value
      // })
      // this.form.get('username').setValue(username);
      this.form.patchValue({
         username : username
      })
    }
    
    addSkills(){
       (<FormArray>this.form.get('skills')).push(new FormControl(null,Validators.required))
    }
    deleteSkills(index:number){
        const controls = (<FormArray>this.form.get('skills'));
        controls.removeAt(index);
    }
    onFormSubmitted(){
      console.log(this.form.value);
      this.formData = this.form.value;
    }
 
}
