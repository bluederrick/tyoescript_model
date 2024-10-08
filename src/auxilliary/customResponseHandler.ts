/** @format */

import { HttpStatusCode } from "axios"


 export class customErrorHandler {
  consructor(_title:string , status : number, message :string) {
    this.title = _title ,
    this.status = status
    this.status=status => 400 && <=500 ? error (status) : success (status)
    
  }
}
export class errorNotification extends customErrorHandler{
  constructor(_title:string , status : number, message :string)
  super(_title:string , status : number, message :string)
  this.Operational = true
  
} 
console.log(HttpStatusCode.Accepted)
export class successMessage extends HttpStatusCode{
  constructor (title:string, message:string ){
    this.title= title ,
    this.message= message
    this.type=true

  }
}