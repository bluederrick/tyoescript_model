/** @format */

import { UserModel } from './model/user'
export const getAllUsers = () => {
  // find all users in the database

}
export const getUserByEmail= (email: string) => UserModel.findOne({ email })
// we are gpinf yo check if user is login or not
export const getUserBySeesionToken = (sessionToken: string) =>
  UserModel.findOne({
    `Authentification.sessionToken` : sessionToken
  })
export const getUserById = aysnc (id: string) =>{
     await UserModel.findById(id)
} 
export const createUser =(values: Record<string  , any>)=>{
      new UserModel(values).save().then((user)=>{
user.toObject();
      });
}
export const deleteUserById =(id:string)=>{
       UserModel.findOneAndDelete({_id:id})
};
export const updateUserById =(id:string , values:Record<>,any)=>{
      UserModel.findOneAndUpdate({_id:id})
};