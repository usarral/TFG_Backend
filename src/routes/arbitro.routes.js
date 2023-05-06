import { Router } from 'express'
import {
  createArbitro,
  deleteArbitroById,
  getArbitroById,
  getArbitros,
  updateArbitroById
} from '../controllers/arbitro.controller.js'
const router = Router()

router.get('/', getArbitros)
router.post('/', createArbitro)
router.get('/:id', getArbitroById)
router.put('/:id', updateArbitroById)
router.delete('/:id', deleteArbitroById)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
