import { Router } from 'express'
const router = Router()
import {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser
} from '../controllers/user.controller.js'

// GET /users
router.get('/', getUsers)
// GET /users/:id
router.get('/:id', getUserById)
// POST /users
router.post('/', createUser)
// PUT /users/:id
router.put('/:id', updateUser)
// DELETE /users/:id
router.delete('/:id', deleteUser)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
