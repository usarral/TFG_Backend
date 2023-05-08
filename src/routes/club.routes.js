import { Router } from 'express'
import {
  getClubs,
  getClub,
  createClub,
  updateClub,
  deleteClub
} from '../controllers/club.controller.js'
const router = Router()

router.get('/', getClubs)
router.get('/:id', getClub)
router.post('/', createClub)
router.put('/:id', updateClub)
router.delete('/:id', deleteClub)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
