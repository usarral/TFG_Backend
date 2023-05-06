import { Router } from 'express'
import {
  createCategoria,
  getCategorias,
  getCategoriaById,
  updateCategoriaById,
  deleteCategoriaById
} from '../controllers/categoria.controller.js'
const router = Router()
// GET /categoria
router.get('/', getCategorias)
// POST /categoria
router.post('/', createCategoria)
// GET /categoria/ID
router.get('/:id', getCategoriaById)
// PUT /categoria/ID
router.put('/:id', updateCategoriaById)
// DELETE /categoria/ID
router.delete('/:id', deleteCategoriaById)
// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
