import { Router } from 'express'
import {
  createArbitro,
  deleteArbitro,
  getArbitro,
  getArbitros,
  updateArbitro
} from '../controllers/arbitro.controller.js'
const router = Router()

router.get('/', getArbitros)
router.post('/', createArbitro)
router.get('/:id', getArbitro)
router.put('/:id', updateArbitro)
router.delete('/:id', deleteArbitro)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
