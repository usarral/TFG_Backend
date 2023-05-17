import { Schema, model } from 'mongoose'

const clubSchema = new Schema({
  nombreClub: {
    type: String,
    required: true
  },
  NIFClub: {
    type: String,
    required: true
  },

  direccionClub: {
    type: String
  },
  ciudadClub: {
    type: String
  },
  provinciaClub: {
    type: String
  },
  CPClub: {
    type: Number
  },
  telefonoClub: {
    type: String
  },
  emailClub: {
    type: String
  },
  webClub: {
    type: String
  },
  escudoClub: {
    type: String
  },
  fechaAltaClub: {
    type: Date,
    default: Date.now
  },
  fechaBajaClub: {
    type: Date || null
  },
  // El responsable del club es un usuario de staff
  responsableClub: {
    type: Schema.Types.ObjectId,
    ref: 'Staff'
  },
  // Los equipos del club son un array de objetos de tipo equipo
  equiposClub: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Equipo'
    }
  ],
  sancionesClub: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sancion'
    }
  ]
})

export default model('Club', clubSchema)
