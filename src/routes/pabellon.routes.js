import { Router } from 'express'
import {
  createPabellon,
  getPabellones,
  getPabellon,
  deletePabellon,
  updatePabellon
} from '../controllers/pabellon.controller.js'
const router = Router()

router.get('/', getPabellones)
router.post('/', createPabellon)
router.get('/:id', getPabellon)
router.delete('/:id', deletePabellon)
router.put('/:id', updatePabellon)
// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
