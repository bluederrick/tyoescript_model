/** @format */
import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
  userSchema: { type: 'string', required: true },
  email: { type: 'string', required: true },
  Authentification: {
    password: { type: 'string', required: true, select: false },
    salt: { type: 'string', select: false },
    sessionToken: { type: 'string', select: false },
  },
  // select:false meanis when we use our controller to fetch a user
  // we dont want it to fetch the Authentication object
})
export const UserModel = mongooose.model('UserModel', userSchema)
