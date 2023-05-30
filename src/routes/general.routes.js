import { Router } from 'express'
import { login } from '../controllers/user.controller.js'
const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' })
})
router.post('/login', login)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
