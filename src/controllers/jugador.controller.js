import Jugador from '../models/jugador.model.js'

const getJugadores = async (req, res) => {
  try {
    const jugadores = await Jugador.find()
    res.json(jugadores)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const createJugador = async (req, res) => {
  const jugador = new Jugador({
    nombreJugador: req.body.nombre,
    apellidoJugador: req.body.apellido,
    apellido2Jugador: req.body.apellido2,
    dniJugador: req.body.dni,
    telefonoJugador: req.body.telefono,
    emailJugador: req.body.email,
    direccionJugador: req.body.direccion,
    municipioJugador: req.body.municipio,
    provinciaJugador: req.body.provincia,
    CPJugador: req.body.CP,
    fechaNacimientoJugador: req.body.fechaNacimiento,
    categoriaJugador: req.body.categoria,
    clubJugador: req.body.club,
    equipoJugador: req.body.equipo
  })
  try {
    const savedJugador = await jugador.save()
    res.json(savedJugador)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const getJugadorById = async (req, res) => {
  try {
    const jugador = await Jugador.findById(req.params.id)
    res.json(jugador)
  } catch (error) {
    res.json({
      message: error
    })
  }
}

const updateJugador = async (req, res) => {
  try {
    const jugador = await Jugador.findById(req.params.id)
    jugador.nombreJugador = req.body.nombre
    jugador.apellidoJugador = req.body.apellido
    jugador.apellido2Jugador = req.body.apellido2
    jugador.dniJugador = req.body.dni
    jugador.telefonoJugador = req.body.telefono
    jugador.emailJugador = req.body.email
    jugador.direccionJugador = req.body.direccion
    jugador.municipioJugador = req.body.municipio
    jugador.provinciaJugador = req.body.provincia
    jugador.CPJugador = req.body.CP
    jugador.fechaNacimientoJugador = req.body.fechaNacimiento
    jugador.categoriaJugador = req.body.categoria
    jugador.clubJugador = req.body.club
    jugador.equipoJugador = req.body.equipo
    const savedJugador = await jugador.save()
    res.json(savedJugador)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const deleteJugadorById = async (req, res) => {
  try {
    const jugador = await Jugador.findByIdAndDelete(req.params.id)
    res.json(jugador)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
export {
  getJugadores,
  createJugador,
  getJugadorById,
  updateJugador,
  deleteJugadorById
}
