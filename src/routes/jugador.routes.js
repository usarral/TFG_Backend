import { Router } from 'express'
import {
  createJugador,
  getJugadorById,
  getJugadores,
  updateJugador,
  deleteJugadorById
} from '../controllers/jugador.controller.js'
const router = Router()

// GET all jugadores
router.get('/', getJugadores)

// GET a jugador by id

router.get('/:id', getJugadorById)

// CREATE a jugador
router.post('/', createJugador)

// UPDATE a jugador
router.put('/:id', updateJugador)

// DELETE a jugador

router.delete('/:id', deleteJugadorById)

// 404 error
router.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' })
})

export default router
