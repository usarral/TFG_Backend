import { Schema, model } from 'mongoose'

const arbitroSchema = new Schema({
  nombreArbitro: {
    type: String,
    required: true
  },
  apellidoArbitro: {
    type: String,
    required: true
  },
  apellido2Arbitro: {
    type: String
  },
  fechaNacimientoArbitro: {
    type: Date,
    required: true
  },
  DNIArbitro: {
    type: String,
    required: true
  },
  telefonoArbitro: {
    type: String,
    required: true
  },
  emailArbitro: {
    type: String
  },
  direccionArbitro: {
    type: String
  },
  municipioArbitro: {
    type: String
  },
  provinciaArbitro: {
    type: String
  },
  CPArbitro: {
    type: Number
  },
  fotoArbitro: {
    type: String
  },
  partidosArbitrados: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Partido'
    }
  ],
  fechaAltaArbitro: {
    type: Date,
    default: Date.now
  },
  fechaBajaArbitro: {
    type: Date || null
  }
})

export default model('Arbitro', arbitroSchema)
