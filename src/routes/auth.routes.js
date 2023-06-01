import { Router } from 'express'
const router = Router()

// Importing controllers
import { login, logout } from '../controllers/auth.controller.js'

// Routes
router.post('/login', login)
router.post('/logout', logout)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
