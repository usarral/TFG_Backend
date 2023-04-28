const getCategorias = async (req, res) => {
  res.status(200).json({ message: 'getCategorias' })
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
