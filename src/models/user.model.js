import { Schema, model } from 'mongoose'
const userSchema = new Schema({
  DNIUser: {
    type: String,
    required: true
  },
  nombreUser: {
    type: String,
    required: true
  },
  emailUser: {
    type: String,
    required: true
  },
  passwordUser: {
    type: String,
    required: true
  },
  rolUser: {
    type: String,
    required: true
  }
})

export default model('User', userSchema)
