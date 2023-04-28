import { Router } from 'express'
import {
  createCategoria,
  getCategorias,
  getCategoriaById,
  updateCategoriaById,
  deleteCategoriaById
} from '../controllers/categoria.controller.js'
const router = Router()

router.get('/', getCategorias)
router.post('/', createCategoria)
router.get('/:categoriaId', getCategoriaById)
router.put('/:categoriaId', updateCategoriaById)
router.delete('/:categoriaId', deleteCategoriaById)
//404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
