import { Router } from 'express'
import {
  createEquipo,
  getEquipos,
  getEquipo,
  deleteEquipo,
  updateEquipo
} from '../controllers/equipo.controller.js'
const router = Router()

// GET: Return all equipos
router.get('/', getEquipos)

// GET: Return equipo by id
router.get('/:id', getEquipo)

// POST: Create a new equipo
router.post('/', createEquipo)

// DELETE: Delete equipo by id
router.delete('/:id', deleteEquipo)

// PUT: Update equipo by id
router.put('/:id', updateEquipo)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
