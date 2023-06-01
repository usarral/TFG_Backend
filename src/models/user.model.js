import { Schema, model } from 'mongoose'
const userSchema = new Schema({
  rolUser: {
    type: String,
    required: true,
    enum: ['arbitro', 'club', 'federacion']
  },
  arbitroUser: {
    type: Schema.Types.ObjectId,
    ref: 'Arbitro'
  },
  clubUser: {
    type: Schema.Types.ObjectId,
    ref: 'Club'
  },

  DNIUser: {
    type: String,
    required: true,
    unique: true
  },
  nombreUser: {
    type: String,
    required: true
  },
  emailUser: {
    type: String,
    required: true,
    unique: true
  },
  passwordUser: {
    type: String,
    required: true
  },
  fingerprintUser: {
    type: String,
    required: false
  },
  tokenUser: {
    type: String,
    required: false
  }
})

export default model('User', userSchema)
