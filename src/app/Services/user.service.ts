import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../Models/user";
import { Loggerservice } from "./logger.service";
@Injectable({
    providedIn:'root'
})
export class UserService{
    user:User[] = [
        new User("pooja","pagare"),
        new User("Sima","Patil")
    ];
    getFullName(){
        return this.user;
    }
    addUser(fname:string,lname:string){
        let userList = new User(fname,lname);
       this.user.push(userList);
       let logService = new Loggerservice();
       logService.getLoggerService(fname,lname);
    }
    onUserClicked:EventEmitter<User> = new EventEmitter<User>();

    getUserDetails(user:User){
        console.log(user);
        this.onUserClicked.emit(user);
    }
}