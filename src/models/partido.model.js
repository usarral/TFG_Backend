import { Schema, model } from 'mongoose'
const partidoSchema = new Schema({
  equipoLocalPartido: {
    type: Schema.Types.ObjectId,
    ref: 'Equipo'
  },
  equipoVisitantePartido: {
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
  golesLocalPartido: {
    type: Number
  },
  golesVisitantePartido: {
    type: Number
  },
  categoriaPartido: {
    type: Schema.Types.ObjectId,
    ref: 'Categoria'
  }

  // sancionesPartido: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Sancion'
  //   }
  // ]
})
export default model('Partido', partidoSchema)
