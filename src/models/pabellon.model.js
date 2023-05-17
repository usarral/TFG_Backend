import { Schema, model } from 'mongoose'
const pabellonSchema = new Schema({
  nombrePabellon: {
    type: String,
    required: true
  },
  direccionPabellon: {
    type: String,
    required: true
  },
  ciudadPabellon: {
    type: String,
    required: true
  },
  provinciaPabellon: {
    type: String,
    required: true
  },
  CPPabellon: {
    type: Number,
    required: true
  },
  telefonoPabellon: {
    type: String,
    required: true
  },
  emailPabellon: {
    type: String,
    required: true
  },
  clubPabellon: {
    type: Schema.Types.ObjectId,
    ref: 'Club'
  },
  partidosPabellon: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Partido'
    }
  ]
})
export default model('Pabellon', pabellonSchema)
