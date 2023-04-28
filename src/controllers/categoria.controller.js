import Categoria from '../models/categoria.model.js'

const getCategorias = async (req, res) => {
  const categorias = await Categoria.find()
  res.json(categorias)
}
const createCategoria = async (req, res) => {}
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
