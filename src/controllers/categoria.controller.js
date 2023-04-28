import Categoria from '../models/categoria.model.js'
import checkObjectId from '../helpers/checkObjectId.js'

const getCategorias = async (req, res) => {
  let categorias = await Categoria.find()
  categorias = categorias.map(categoria => {
    return {
      id: categoria._id,
      nombre: categoria.nombre,
      minEdad: categoria.minEdad,
      maxEdad: categoria.maxEdad,
      genero: categoria.genero
    }
  })

  res.status(200).json(categorias)
}
const createCategoria = async (req, res) => {
  let error = ''
  try {
    console.info('req.body', req.body.nombre)
    let { nombre, minEdad, maxEdad, genero } = req.body
    // Si nombre, minEdad, maxEdad o genero no existen se lanza un error
    if (!nombre || !minEdad || !maxEdad || !genero) {
      error = 'nombre, minEdad, maxEdad y genero son requeridos'
      res.status(400).json({ error })
    }
    // Si minEdad o maxEdad no son numeros se lanza un error
    if (isNaN(minEdad) || isNaN(maxEdad)) {
      error = 'La edad minima y maxima deben ser numeros'
      res.status(400).json({ error })
    }
    minEdad = parseInt(minEdad)
    maxEdad = parseInt(maxEdad)

    // Si minEdad es mayor a maxEdad se lanza un error
    if (minEdad > maxEdad) {
      error = 'La edad minima no puede ser mayor a la edad maxima'
      res.status(400).json({ error })
    }
    genero = genero.toUpperCase()
    // Si genero no es M, F o O se lanza un error
    if (genero !== 'M' && genero !== 'F' && genero !== 'O') {
      error = 'El genero debe ser O, M o F'
      res.status(400).json({ error })
    }
    const newCategoria = new Categoria({ nombre, minEdad, maxEdad, genero })
    const categoriaSaved = await newCategoria.save()
    res.status(201).json(categoriaSaved)
  } catch (error) {
    console.info('error', error)

    res.status(500).json({ error })
  }
}
const getCategoriaById = async (req, res) => {
  const { id } = req.params

  await Categoria.findById(id)
    .then(categoria => {
      if (!categoria) {
        res.status(404).json({ error: 'Categoria no encontrada' })
        return
      }

      res.status(200).json({
        id: categoria._id,
        nombre: categoria.nombre,
        minEdad: categoria.minEdad,
        maxEdad: categoria.maxEdad,
        genero: categoria.genero
      })
    })
    .catch(error => {
      console.error('Error al buscar la categoria', error)

      res.status(500).json({
        error:
          'Error al buscar la categoria, revisa el id enviado o prueba mas tarde'
      })
      return
    })
}
const updateCategoriaById = async (req, res) => {}
const deleteCategoriaById = async (req, res) => {}

export {
  createCategoria,
  getCategorias,
  getCategoriaById,
  updateCategoriaById,
  deleteCategoriaById
}
