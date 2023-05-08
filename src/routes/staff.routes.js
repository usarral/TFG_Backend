import { Router } from 'express'
import {
  getStaffs,
  getStaffById,
  createStaff,
  deleteStaff,
  updateStaff
} from '../controllers/staff.controller.js'
const router = Router()

// GET /staffs
router.get('/', getStaffs)
// GET /staffs/:id
router.get('/:id', getStaffById)
// POST /staffs
router.post('/', createStaff)
// PUT /staffs/:id
router.put('/:id', updateStaff)
// DELETE /staffs/:id
router.delete('/:id', deleteStaff)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
