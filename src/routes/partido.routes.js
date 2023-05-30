import { Router } from 'express'
const router = Router()

import {
  createPartido,
  getPartidos,
  getPartido,
  updatePartido,
  deletePartido
} from '../controllers/partido.controller.js'

// GET: Return all partidos
router.get('/', getPartidos)

// GET: Return a partido by id
router.get('/:id', getPartido)

// POST: Create a new partido
router.post('/', createPartido)

// PUT: Update partido by id
router.put('/:id', updatePartido)

// DELETE: Delete partido by id
router.delete('/:id', deletePartido)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
