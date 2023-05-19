import { Schema, model } from 'mongoose'

const categoriaSchema = new Schema({
  nombreCategoria: String,
  minEdadCategoria: Number,
  maxEdadCategoria: Number,
  generoCategoria: {
    type: String,
    enum: ['M', 'F', 'X']
  }
})

export default model('Categoria', categoriaSchema)
