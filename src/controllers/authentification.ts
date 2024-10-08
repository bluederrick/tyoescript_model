/** @format */
import express from 'express'
import { createUser, getUserByEmail, userByEmail, usersByEmail } from '../userService'
import { customErrorHandler, errorNotification } from '../auxilliary/customResponseHandler'
import { UserModel } from '../model/user'
// register a new user 
export const register = (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body
    const existingUser = await usersByEmail(email)
    if (existingUser) {
      return res.status(400).json({ 
        data: existingUser,
         type: false,
        errorDetails:new errorNotification( 'registration error',400 , 'user already registered')
       })
    }
    const user = await createUser({
      email,
      username,
      authentification{
            salt:random(),
            password
      }
    })
    return  res.status(200).json({
      data:user ,
      type: true
    }).end()
  } catch (err) {
    console.log(err)
    return res.status(400).statusMessage('soemthing went wrong')
  }
}
// users Login  
export const login = (req: express.Request, res: express.Response) => {
  try{
const {email , password} = req.body;
if(!email || !password) return new customErrorHandler('no email or password', 401 , 'kindly enter your email address and password');
  // check if there is user already with this email
  const isEmailExist = await getUserByEmail=(email);
   if( !isEmailExist) {
    throw new error()
    return res.status(401).json({
      type:false ,
      message :"user does not Exist"
    })
   }
   const expectedHash  = bcrypt(UserModel.authentification.password , passsword)
   if(!expectedHash ){
    return res.status(403).json({
      details: 'please enter your right details',
      type: false
    })
   }
}catch(err){
    console.log(err)
    return res.status(401).statusMessage('cannnot logged in')
  }
}