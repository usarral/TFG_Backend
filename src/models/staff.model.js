import { Schema, model } from 'mongoose'
const staffSchema = new Schema({
  nombreStaff: {
    type: String,
    required: true
  },
  apellidoStaff: {
    type: String,
    required: true
  },
  apellido2Staff: {
    type: String,
    required: true
  },
  dniStaff: {
    type: String,
    required: true
  },
  telefonoStaff: {
    type: String,
    required: true
  },
  emailStaff: {
    type: String,
    required: true
  },
  direccionStaff: {
    type: String,
    required: true
  },
  municipioStaff: {
    type: String,
    required: true
  },
  provinciaStaff: {
    type: String,
    required: true
  },
  CPStaff: {
    type: Number,
    required: true
  },
  fechaNacimientoStaff: {
    type: Date,
    required: true
  },
  cargoStaff: {
    type: String,
    required: true
  },
  clubStaff: {
    type: Schema.Types.ObjectId,
    ref: 'Club'
  },
  equipoStaff: {
    type: Schema.Types.ObjectId,
    ref: 'Equipo'
  },
  estadoStaff: {
    type: String,
    enum: ['Validado', 'Pendiente', 'Rechazado'],
    default: 'Pendiente'
  }
})
export default model('Staff', staffSchema)
