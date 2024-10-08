// helpers to bcrypt the password or to generate  random password using helpers functio     
import crypto from crypto ;


export const random  =()=>{
      crypto.randomBytes(128).toString('base64');
}

export const Authetification = (salt:string ,password:string)=>{}; 