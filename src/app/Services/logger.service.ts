export class Loggerservice{
    fname:string;
    lname:string;
    getLoggerService(fname,lname){
      console.log(`You have logged in ${fname} - ${lname}`)
    }
}