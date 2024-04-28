import { AbstractControl, FormControl } from "@angular/forms";
import { retry } from "rxjs";


export class CustomValidators{
    static noSpaceAllowed = (controls:FormControl) =>{
        if(controls.value != null && controls.value.indexOf(' ')!=-1){
           return {noSpaceAllowed:true}
        }
        return null;
    }
    static checkUsername(controls:AbstractControl): Promise<any>{
         return usernameExist(controls.value);
    }
}


function usernameExist(username:string){
    const usernameToken = ['pooja','sima','asha'];
    return new Promise((resolve,reject)=>{
   
        setTimeout(()=>{
         if(usernameToken.includes(username)){
             resolve({checkUsernameExist:true})
         }else{
             resolve({checkUsernameExist:false})
         }
        },2000)
     
})
  
}