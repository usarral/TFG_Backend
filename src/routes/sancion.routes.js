import { Router } from 'express'
import {
  createSancion,
  getSanciones,
  updateSancion,
  deleteSancion,
  getSancionById
} from '../controllers/sancion.controller.js'
const router = Router()

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
