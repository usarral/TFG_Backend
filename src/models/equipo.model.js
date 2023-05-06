import { Schema, model } from 'mongoose'
const equipoSchema = new Schema({
  nombreEquipo: {
    type: String,
    required: true
  },
  categoriaEquipo: {
    type: Schema.Types.ObjectId,
    ref: 'Categoria'
  },
  responsableEquipo: {
    type: Schema.Types.ObjectId,
    ref: 'Staff'
  },
  emailEquipo: {
    type: String
  },
  telefonoEquipo: {
    type: String
  },
  direccionEquipo: {
    type: String
  },
  municipioEquipo: {
    type: String
  },
  provinciaEquipo: {
    type: String
  },
  CPEquipo: {
    type: Number
  },
  escudoEquipo: {
    type: String
  },

  clubEquipo: {
    type: Schema.Types.ObjectId,
    ref: 'Club'
  },
  jugadoresEquipo: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Jugador'
    }
  ],
  staffEquipo: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Staff'
    }
  ],
  partidosEquipo: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Partido'
    }
  ],
  sancionesEquipo: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sancion'
    }
  ],
  fechaAltaEquipo: {
    type: Date,
    default: Date.now
  },
  fechaBajaEquipo: {
    type: Date || null
  }
})
export default model('Equipo', equipoSchema)
