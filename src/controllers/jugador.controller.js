import Jugador from '../models/jugador.model.js'

const getJugadores = async (req, res) => {
  let jugadores = await Jugador.find()
  if (jugadores.length === 0) {
    res.status(404).json({ message: 'No hay jugadores' })
    return
  }
  jugadores = jugadores.map(jugador => {
    return {
      id: jugador._id,
      foto: jugador.fotoJugador,
      nombre: jugador.nombreJugador,
      apellido: jugador.apellidoJugador,
      apellido2: jugador.apellido2Jugador,
      DNI: jugador.dniJugador,
      fechaNacimiento: jugador.fechaNacimientoJugador,
      email: jugador.emailJugador
    }
  })
  res.status(200).json({
    message: 'Jugadores encontrados',
    data: jugadores
  })
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
    ciudadJugador: req.body.ciudad,
    provinciaJugador: req.body.provincia,
    CPJugador: req.body.CP,
    fechaNacimientoJugador: req.body.fechaNacimiento,
    categoriaJugador: req.body.categoria,
    clubJugador: req.body.club,
    equipoJugador: req.body.equipo,
    fotoJugador: req.body.foto
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
    jugador.ciudadJugador = req.body.ciudad
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
