import { Schema, model } from 'mongoose'

const clubSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  NIF: {
    type: String,
    required: true
  },

  direccion: {
    type: String
  },
  municipio: {
    type: String
  },
  provincia: {
    type: String
  },
  CP: {
    type: Number
  },
  telefono: {
    type: String
  },
  email: {
    type: String
  },
  web: {
    type: String
  },
  escudo: {
    type: String
  },
  fechaAlta: {
    type: Date,
    default: Date.now
  },
  fechaBaja: {
    type: Date || null
  },
  // El responsable del club es un usuario de staff
  responsable: {
    type: Schema.Types.ObjectId,
    ref: 'Staff'
  },
  // Los equipos del club son un array de objetos de tipo equipo
  equipos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Equipo'
    }
  ],
  sanciones: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sancion'
    }
  ]
})

export default model('Club', clubSchema)
