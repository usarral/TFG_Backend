import Categoria from '../models/categoria.model.js'

const getCategorias = async (req, res) => {
  const categorias = await Categoria.find()
  res.json(categorias)
}
const createCategoria = async (req, res) => {
  let error = ''
  try {
    console.info('req.body', req.body.nombre)
    let { nombre, min_edad, max_edad, genero } = req.body
    // Si nombre, min_edad, max_edad o genero no existen se lanza un error
    if (!nombre || !min_edad || !max_edad || !genero) {
      error = 'nombre, min_edad, max_edad y genero son requeridos'
      res.status(400).json({ error })
    }
    // Si min_edad o max_edad no son numeros se lanza un error
    if (isNaN(min_edad) || isNaN(max_edad)) {
      error = 'La edad minima y maxima deben ser numeros'
      res.status(400).json({ error })
    }
    min_edad = parseInt(min_edad)
    max_edad = parseInt(max_edad)

    // Si min_edad es mayor a max_edad se lanza un error
    if (min_edad > max_edad) {
      error = 'La edad minima no puede ser mayor a la edad maxima'
      res.status(400).json({ error })
    }
    genero = genero.toUpperCase()
    // Si genero no es M, F o O se lanza un error
    if (genero !== 'M' && genero !== 'F' && genero !== 'O') {
      error = 'El genero debe ser O, M o F'
      res.status(400).json({ error })
    }
    const newCategoria = new Categoria({ nombre, min_edad, max_edad, genero })
    const categoriaSaved = await newCategoria.save()
    res.status(201).json(categoriaSaved)
  } catch (error) {
    console.info('error', error)

    res.status(500).json({ error })
  }
}
const getCategoriaById = async (req, res) => {}
const updateCategoriaById = async (req, res) => {}
const deleteCategoriaById = async (req, res) => {}

export {
  createCategoria,
  getCategorias,
  getCategoriaById,
  updateCategoriaById,
  deleteCategoriaById
}
