import { Router } from 'express'
const router = Router()
import {
  createSancion,
  getSanciones,
  updateSancion,
  deleteSancion,
  getSancionById
} from '../controllers/sancion.controller.js'

// /api/sancion
router.post('/', createSancion)
router.get('/', getSanciones)

// /api/sancion/:id
router.get('/:id', getSancionById)
router.put('/:id', updateSancion)
router.delete('/:id', deleteSancion)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
