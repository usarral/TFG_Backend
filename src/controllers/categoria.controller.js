// Import Categoria Model
import Categoria from '../models/categoria.model.js'
// Function GetCategorias which return all categorias from DB
const getCategorias = async (req, res) => {
  // Query to DB
  let categorias = await Categoria.find()
  // If there are no categorias
  if (categorias.length === 0) {
    // Return 204 (No Content)
    res.status(204).json({ message: 'No hay categorias' })
    return
  }
  // If there are categorias
  categorias = categorias.map(categoria => {
    // Return only the data we want to show
    return {
      id: categoria._id,
      nombre: categoria.nombreCategoria,
      genero: categoria.generoCategoria,
      minEdad: categoria.minEdadCategoria,
      maxEdad: categoria.maxEdadCategoria
    }
  })
  // Return 200 (OK) and the data of the categorias
  res.status(200).json({
    message: 'Categorias encontradas',
    data: categorias
  })
}
// Function GetCategoria which return one categoria from DB
const createCategoria = async (req, res) => {
  // Get the categoria data from the request body
  const { nombre, genero, minEdad, maxEdad } = req.body
  // Create a new categoria with the data from the request body
  const categoria = new Categoria({
    nombreCategoria: nombre,
    generoCategoria: genero,
    minEdadCategoria: minEdad,
    maxEdadCategoria: maxEdad
  })
  try {
    // Save the categoria in the DB
    const categoriaCreada = await categoria.save()
    // Return 201 (Created) and the data of the categoria created
    res.status(201).json({
      message: 'Categoria creada correctamente',
      data: {
        id: categoriaCreada._id,
        nombre: categoriaCreada.nombreCategoria,
        genero: categoriaCreada.generoCategoria,
        minEdad: categoriaCreada.minEdadCategoria,
        maxEdad: categoriaCreada.maxEdadCategoria
      }
    })
  } catch (error) {
    // Error handling
    res.status(400).json({
      message: 'Error al crear la categoria'
    })
  }
}

// Function GetCategoria which return one categoria from DB
const getCategoriaById = async (req, res) => {
  // Get the categoria id from the request params
  const { id } = req.params
  // Query to DB
  await Categoria.findById(id)
    .then(categoria => {
      // If there isn't any categoria with that id
      if (!categoria) {
        // Return 404 (Not Found)
        res.status(404).json({ message: 'Categoria no encontrada' })
        return
      }

      // If there is an categoria with that id
      // Return 200 (OK) and the data of the categoria
      res.status(200).json({
        message: 'Categoria encontrada',
        data: {
          id: categoria._id,
          nombre: categoria.nombreCategoria,
          minEdad: categoria.minEdadCategoria,
          maxEdad: categoria.maxEdadCategoria,
          genero: categoria.generoCategoria
        }
      })
    })
    .catch(error => {
      // Error handling
      res.status(400).json({
        message:
          'Error al buscar la categoria, revisa el id enviado o prueba mas tarde'
      })
    })
}
// Function UpdateCategoria which update one categoria from DB
const updateCategoriaById = async (req, res) => {
  // Get the categoria id from the request params
  const { id } = req.params
  // Get the categoria data from the request body
  const { nombre, minEdad, maxEdad, genero } = req.body
  // Query to DB
  const categoria = await Categoria.findById(id)
  // If there isn't any categoria with that id
  if (!categoria) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Categoria no encontrada' })
    return
  }
  // If there is an categoria with that id
  categoria.nombreCategoria = nombre || categoria.nombreCategoria
  categoria.minEdadCategoria = minEdad || categoria.minEdadCategoria
  categoria.maxEdadCategoria = maxEdad || categoria.maxEdadCategoria
  categoria.generoCategoria = genero || categoria.generoCategoria
  // Save the categoria in the DB
  await categoria
    .save()
    .then(categoria => {
      // Return 200 (OK) and the data of the categoria updated
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
      res.status(400).json({
        message:
          'Error al actualizar la categoria, revisa que los datos sean correctos'
      })
    })
}
// Function DeleteCategoria which delete one categoria from DB
const deleteCategoriaById = async (req, res) => {
  // Get the categoria id from the request params
  const { id } = req.params
  // Query to DB
  await Categoria.findByIdAndDelete(id)
    .then(categoria => {
      // If there isn't any categoria with that id
      if (!categoria) {
        res.status(404).json({ message: 'Categoria no encontrada' })
        return
      }
      // If there is an categoria with that id
      res.status(200).json({
        message: 'Categoria eliminada correctamente'
      })
    })
    .catch(error => {
      // Error handling
      res.status(400).json({
        message:
          'Error al eliminar la categoria, revisa el id enviado o prueba mas tarde'
      })
    })
}
// Export the functions to use them in the routes
export {
  createCategoria,
  getCategorias,
  getCategoriaById,
  updateCategoriaById,
  deleteCategoriaById
}
