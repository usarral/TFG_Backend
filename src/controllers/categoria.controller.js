/* TODO:
[] Crear categoria
  [] Validar que nombre, minEdad, maxEdad y genero existan
  [] Validar que minEdad y maxEdad sean numeros
  [] Validar que minEdad no sea mayor a maxEdad
  [] Validar que genero sea M, F o X
  [] Validar que no exista una categoria con el mismo nombre, genero, minEdad y maxEdad
[] Obtener categorias
[] Obtener categoria por ID
[] Modificar categoria por ID
[] Eliminar categoria por ID
*/
import Categoria from '../models/categoria.model.js'

const getCategorias = async (req, res) => {
  let categorias = await Categoria.find()
  categorias = categorias.map(categoria => {
    return {
      id: categoria._id,
      nombre: categoria.nombre,
      genero: categoria.genero,
      minEdad: categoria.minEdad,
      maxEdad: categoria.maxEdad
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
    }
    // Si minEdad o maxEdad no son numeros se lanza un error
    if (isNaN(minEdad) || isNaN(maxEdad)) {
      error =
        'La edad minima y maxima deben ser numeros, edad minima: ' +
        typeof minEdad +
        ', edad maxima: ' +
        typeof maxEdad
    }
    minEdad = parseInt(minEdad)
    maxEdad = parseInt(maxEdad)

    // Si minEdad es mayor a maxEdad se lanza un error
    if (minEdad > maxEdad) {
      error = 'La edad minima no puede ser mayor a la edad maxima'
    }
    genero = genero.toUpperCase()
    // Si genero no es M, F o O se lanza un error
    if (genero !== 'M' && genero !== 'F' && genero !== 'X') {
      error = 'El genero debe ser X, M o F'
    }
    if (error) {
      res.status(400).json({ error })
      return
    } else {
      const newCategoria = new Categoria({ nombre, minEdad, maxEdad, genero })
      const categoriaSaved = await newCategoria.save()
      res.status(201).json({
        message: 'Categoria creada correctamente',
        id: categoriaSaved._id,
        nombre: categoriaSaved.nombre,
        minEdad: categoriaSaved.minEdad,
        maxEdad: categoriaSaved.maxEdad,
        genero: categoriaSaved.genero
      })
    }
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
    })
}
const updateCategoriaById = async (req, res) => {
  const { id } = req.params
  const { nombre, minEdad, maxEdad, genero } = req.body
  const categoria = await Categoria.findById(id)
  if (!categoria) {
    res.status(404).json({ error: 'Categoria no encontrada' })
    return
  }
  categoria.nombre = nombre || categoria.nombre
  categoria.minEdad = minEdad || categoria.minEdad
  categoria.maxEdad = maxEdad || categoria.maxEdad
  categoria.genero = genero || categoria.genero
  await categoria
    .save()
    .then(categoria => {
      res.status(200).json({
        message: 'Categoria actualizada correctamente',
        id: categoria._id,
        nombre: categoria.nombre,
        minEdad: categoria.minEdad,
        maxEdad: categoria.maxEdad,
        genero: categoria.genero
      })
    })
    .catch(error => {
      // Si error _message dice 'Validation failed' es porque algun campo no cumple con las validaciones
      if (error._message === 'Categoria validation failed') {
        res.status(400).json({
          error:
            'Error al actualizar la categoria, revisa que los datos sean correctos'
        })
      } else {
        res.status(500).json({
          error:
            'Error al actualizar la categoria, revisa el id enviado o prueba mas tarde'
        })
      }
    })
}
const deleteCategoriaById = async (req, res) => {
  const { id } = req.params
  await Categoria.findByIdAndDelete(id)
    .then(categoria => {
      if (!categoria) {
        res.status(404).json({ error: 'Categoria no encontrada' })
        return
      }

      res.status(200).json({
        message: 'Categoria eliminada correctamente'
      })
    })
    .catch(error => {
      console.error('Error al eliminar la categoria', error)

      res.status(500).json({
        error:
          'Error al eliminar la categoria, revisa el id enviado o prueba mas tarde'
      })
    })
}

export {
  createCategoria,
  getCategorias,
  getCategoriaById,
  updateCategoriaById,
  deleteCategoriaById
}
