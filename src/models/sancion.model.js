import { Schema, model } from 'mongoose'
const sancionSchema = new Schema(
  {
    arbitroSancion: {
      type: Schema.Types.ObjectId,
      ref: 'Arbitro'
    },
    tipoSancion: {
      type: String,
      enum: ['Jugador', 'Staff', 'Equipo', 'Club']
    },
    destinatarioSancion: {
      type: String
    },
    causaSancion: {
      type: String
    },
    fechaSancion: {
      type: Date,
      default: Date.now
    },
    partidoSancion: {
      type: Schema.Types.ObjectId,
      ref: 'Partido'
    },
    estadoSancion: {
      type: String,
      enum: ['Pendiente', 'Apelada', 'Pagada', 'Anulada']
    }
  },
  {
    collection: 'sanciones'
  }
)

export default model('Sancion', sancionSchema)
