import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' })
})

//404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
