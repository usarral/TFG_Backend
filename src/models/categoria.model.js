import { Schema, model } from 'mongoose'

const categoriaSchema = new Schema({
  nombre: String,
  min_edad: Number,
  max_edad: Number,
  genero: {
    type: String,
    enum: ['M', 'F', 'O']
  }
})

export default model('Categoria', categoriaSchema)
