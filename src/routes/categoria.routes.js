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

export default router
