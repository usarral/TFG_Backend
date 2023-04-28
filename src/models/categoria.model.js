import { Schema, model } from 'mongoose'

const categoriaSchema = new Schema({
  nombre: String,
  minEdad: Number,
  maxEdad: Number,
  genero: {
    type: String,
    enum: ['M', 'F', 'O']
  }
})

export default model('Categoria', categoriaSchema)
