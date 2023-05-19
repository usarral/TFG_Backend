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
  if (categorias.length === 0) {
    res.status(200).json({ message: 'No hay categorias' })
    return
  }

  categorias = categorias.map(categoria => {
    return {
      id: categoria._id,
      nombre: categoria.nombreCategoria,
      genero: categoria.generoCategoria,
      minEdad: categoria.minEdadCategoria,
      maxEdad: categoria.maxEdadCategoria
    }
  })

  res.status(200).json({
    message: 'Categorias encontradas',
    data: categorias
  })
}
const createCategoria = async (req, res) => {
  const { nombre, genero, minEdad, maxEdad } = req.body
  const categoria = new Categoria({
    nombreCategoria: nombre,
    generoCategoria: genero,
    minEdadCategoria: minEdad,
    maxEdadCategoria: maxEdad
  })
  try {
    const categoriaCreada = await categoria.save()
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
    res.status(400).json({
      message: 'Error al crear la categoria'
    })
    return
  }
}
const getCategoriaById = async (req, res) => {
  const { id } = req.params

  await Categoria.findById(id)
    .then(categoria => {
      if (!categoria) {
        res.status(404).json({ message: 'Categoria no encontrada' })
        return
      }

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
      console.error('Error al buscar la categoria', error)

      res.status(500).json({
        message:
          'Error al buscar la categoria, revisa el id enviado o prueba mas tarde'
      })
    })
}
const updateCategoriaById = async (req, res) => {
  const { id } = req.params
  const { nombre, minEdad, maxEdad, genero } = req.body
  const categoria = await Categoria.findById(id)
  if (!categoria) {
    res.status(404).json({ message: 'Categoria no encontrada' })
    return
  }
  categoria.nombreCategoria = nombre || categoria.nombreCategoria
  categoria.minEdadCategoria = minEdad || categoria.minEdadCategoria
  categoria.maxEdadCategoria = maxEdad || categoria.maxEdadCategoria
  categoria.generoCategoria = genero || categoria.generoCategoria
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
          message:
            'Error al actualizar la categoria, revisa que los datos sean correctos'
        })
      } else {
        res.status(500).json({
          message:
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
        res.status(404).json({ message: 'Categoria no encontrada' })
        return
      }

      res.status(200).json({
        message: 'Categoria eliminada correctamente'
      })
    })
    .catch(error => {
      console.error('Error al eliminar la categoria', error)

      res.status(500).json({
        message:
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
