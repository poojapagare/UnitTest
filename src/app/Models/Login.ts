export class Login{
    constructor(public email:string,public id:string,private _token:string,
        private expireIn:Date){}
    get token(){
      if(!this.expireIn || this.expireIn < new Date()){
            return null;
      }  
      return this._token;
    }
   
 
}