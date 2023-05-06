import { Schema, model } from 'mongoose'
const partidoSchema = new Schema({
  equipoLocal: {
    type: Schema.Types.ObjectId,
    ref: 'Equipo'
  },
  equipoVisitante: {
    type: Schema.Types.ObjectId,
    ref: 'Equipo'
  },
  categoriaPartido: {
    type: Schema.Types.ObjectId,
    ref: 'Categoria'
  },
  fechaPartido: {
    type: Date,
    required: true
  },
  horaPartido: {
    type: String,
    required: true
  },
  pabellonPartido: {
    type: Schema.Types.ObjectId,
    ref: 'Pabellon'
  },
  arbitroPartido: {
    type: Schema.Types.ObjectId,
    ref: 'Arbitro'
  },
  resultadoPartido: {
    type: String,
    enum: ['Local', 'Visitante', 'Empate', 'No jugado']
  },
  puntosLocal: {
    type: Number
  },
  puntosVisitante: {
    type: Number
  },
  actaPartido: {
    type: String
  },
  sancionesPartido: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sancion'
    }
  ]
})
export default model('Partido', partidoSchema)
