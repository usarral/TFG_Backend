import { Router } from 'express'
import { getArbitros } from '../controllers/arbitro.controller.js'
const router = Router()

router.get('/', getArbitros)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
