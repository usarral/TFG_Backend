// Import Jugador model
import Jugador from '../models/jugador.model.js'
// Function GetJugadores which return all jugadores from DB if there isn't any filter, or return the filtered jugadores
const getJugadores = async (req, res) => {
  // Get all jugadores from DB
  let jugadores = await Jugador.find()
  // If there are no jugadores
  if (jugadores.length === 0) {
    // Return 204 (No Content)
    res.status(204).json({ message: 'No hay jugadores' })
    return
  }
  // If there are jugadores

  console.log(jugadores)

  // Map jugadores to return only the data we want to show
  jugadores = jugadores.map(jugador => {
    return {
      id: jugador._id,
      foto:
        jugador.fotoJugador ||
        'https://ui-avatars.com/api/?name=' +
          jugador.nombreJugador.substring(0, 1) +
          '+' +
          jugador.apellidoJugador.substring(0, 1) +
          '&background=random',
      nombre: jugador.nombreJugador,
      apellido: jugador.apellidoJugador,
      apellido2: jugador.apellido2Jugador,
      DNI: jugador.dniJugador,
      fechaNacimiento: jugador.fechaNacimientoJugador,
      email: jugador.emailJugador,
      club: jugador.clubJugador
    }
  })
  // If there is a query string

  // Return jugadores
  res.status(200).json({
    message: 'Jugadores encontrados',
    data: jugadores
  })
}
// Function CreateJugador which create a new jugador in DB
const createJugador = async (req, res) => {
  // Get data from request body
  const {
    nombre,
    apellido,
    apellido2,
    DNI,
    telefono,
    email,
    direccion,
    ciudad,
    provincia,
    CP,
    fechaNacimiento,
    categoria,
    club,
    equipo,
    foto
  } = req.body
  // Create a new Jugador
  const jugador = new Jugador({
    nombreJugador: nombre,
    apellidoJugador: apellido,
    apellido2Jugador: apellido2,
    dniJugador: DNI,
    telefonoJugador: telefono,
    emailJugador: email,
    direccionJugador: direccion,
    ciudadJugador: ciudad,
    provinciaJugador: provincia,
    CPJugador: CP,
    fechaNacimientoJugador: fechaNacimiento,
    categoriaJugador: categoria,
    clubJugador: club,
    equipoJugador: equipo,
    fotoJugador:
      foto ||
      `https://ui-avatars.com/api/?name=${nombre.substring(
        0,
        1
      )}+${apellido.substring(0, 1)}&background=random`
  })
  // Save the new Jugador in DB

  try {
    const savedJugador = await jugador.save()
    // Return success status and data
    res.status(201).json({
      message: 'Jugador creado',
      data: {
        id: savedJugador._id,
        nombre: savedJugador.nombreJugador,
        apellido: savedJugador.apellidoJugador,
        apellido2: savedJugador.apellido2Jugador,
        DNI: savedJugador.dniJugador,
        telefono: savedJugador.telefonoJugador,
        email: savedJugador.emailJugador,
        direccion: savedJugador.direccionJugador,
        ciudad: savedJugador.ciudadJugador,
        provincia: savedJugador.provinciaJugador,
        CP: savedJugador.CPJugador,
        fechaNacimiento: savedJugador.fechaNacimientoJugador,
        categoria: savedJugador.categoriaJugador,
        club: savedJugador.clubJugador,
        equipo: savedJugador.equipoJugador,
        foto:
          savedJugador.fotoJugador ||
          'https://ui-avatars.com/api/?name=' +
            nombreJugador.substring(0, 1) +
            '+' +
            apellidoJugador.substring(0, 1) +
            '&background=random'
      }
    })
  } catch (error) {
    // Return error status and message
    res.status(400).json({ message: `Error al crear el jugador` })
  }
}
// GET: Return jugador by id
const getJugadorById = async (req, res) => {
  try {
    // Get jugador by id
    const jugador = await Jugador.findById(req.params.id)
    // If there is no jugador
    if (!jugador) {
      // Return 404 (Not Found)
      res.status(404).json({ message: 'No hay jugador' })
      return
    }
    // If there is jugador
    res.status(200).json({
      message: 'Jugador encontrado',
      data: {
        id: jugador._id,
        nombre: jugador.nombreJugador,
        apellido: jugador.apellidoJugador,
        apellido2: jugador.apellido2Jugador,
        DNI: jugador.dniJugador,
        telefono: jugador.telefonoJugador,
        email: jugador.emailJugador,
        direccion: jugador.direccionJugador,
        ciudad: jugador.ciudadJugador,
        provincia: jugador.provinciaJugador,
        CP: jugador.CPJugador,
        fechaNacimiento: jugador.fechaNacimientoJugador,
        categoria: jugador.categoriaJugador,
        club: jugador.clubJugador,
        equipo: jugador.equipoJugador,
        foto: jugador.fotoJugador
      }
    })
  } catch (error) {
    // Return error status and message
    res.status(400).json({ message: `Error al buscar el jugador` })
  }
}
// Function UpdateJugador which update a jugador in DB
const updateJugador = async (req, res) => {
  // Get id from request params
  const { id } = req.params
  // Get data from request body
  const {
    nombre,
    apellido,
    apellido2,
    DNI,
    telefono,
    email,
    direccion,
    ciudad,
    provincia,
    CP,
    fechaNacimiento,
    categoria,
    club,
    equipo,
    foto
  } = req.body
  try {
    // Find jugador by id
    const jugadorActualizado = await Jugador.findById(id)
    // If there is no jugador
    if (!jugadorActualizado) {
      // Return 404 (Not Found)
      res.status(404).json({ message: 'No hay jugador' })
      return
    }
    // If there is jugador
    // Update jugador
    jugadorActualizado.nombreJugador =
      nombre || jugadorActualizado.nombreJugador
    jugadorActualizado.apellidoJugador =
      apellido || jugadorActualizado.apellidoJugador
    jugadorActualizado.apellido2Jugador =
      apellido2 || jugadorActualizado.apellido2Jugador
    jugadorActualizado.dniJugador = DNI || jugadorActualizado.dniJugador
    jugadorActualizado.telefonoJugador =
      telefono || jugadorActualizado.telefonoJugador
    jugadorActualizado.emailJugador = email || jugadorActualizado.emailJugador
    jugadorActualizado.direccionJugador =
      direccion || jugadorActualizado.direccionJugador
    jugadorActualizado.ciudadJugador =
      ciudad || jugadorActualizado.ciudadJugador
    jugadorActualizado.provinciaJugador =
      provincia || jugadorActualizado.provinciaJugador
    jugadorActualizado.CPJugador = CP || jugadorActualizado.CPJugador
    jugadorActualizado.fechaNacimientoJugador =
      fechaNacimiento || jugadorActualizado.fechaNacimientoJugador
    jugadorActualizado.categoriaJugador =
      categoria || jugadorActualizado.categoriaJugador
    jugadorActualizado.clubJugador = club || jugadorActualizado.clubJugador
    jugadorActualizado.equipoJugador =
      equipo || jugadorActualizado.equipoJugador
    jugadorActualizado.fotoJugador = foto || jugadorActualizado.fotoJugador
    // Save the updated jugador in DB
    const jugadorActualizadoDB = await jugadorActualizado.save()
    // Return success status and data
    res.status(200).json({
      message: 'Jugador actualizado',
      data: {
        id: jugadorActualizadoDB._id,
        nombre: jugadorActualizadoDB.nombreJugador,
        apellido: jugadorActualizadoDB.apellidoJugador,
        apellido2: jugadorActualizadoDB.apellido2Jugador,
        DNI: jugadorActualizadoDB.dniJugador,
        telefono: jugadorActualizadoDB.telefonoJugador,
        email: jugadorActualizadoDB.emailJugador,
        direccion: jugadorActualizadoDB.direccionJugador,
        ciudad: jugadorActualizadoDB.ciudadJugador,
        provincia: jugadorActualizadoDB.provinciaJugador,
        CP: jugadorActualizadoDB.CPJugador,
        fechaNacimiento: jugadorActualizadoDB.fechaNacimientoJugador,
        categoria: jugadorActualizadoDB.categoriaJugador,
        club: jugadorActualizadoDB.clubJugador,
        equipo: jugadorActualizadoDB.equipoJugador,
        foto: jugadorActualizadoDB.fotoJugador
      }
    })
  } catch (error) {
    // Return error status and message
    res.status(400).json({ message: `Error al actualizar el jugador` })
  }
}
// Function DeleteJugador which delete a jugador in DB
const deleteJugadorById = async (req, res) => {
  try {
    // Delete jugador by id
    const jugador = await Jugador.findByIdAndDelete(req.params.id)
    // If there is no jugador
    if (!jugador) {
      // Return 404 (Not Found)
      res.status(404).json({ message: 'No hay jugador' })
      return
    }
    // If there is jugador
    // Return success status and data
    res.status(200).json({
      message: 'Jugador eliminado',
      data: jugador
    })
  } catch (error) {
    // Return error status and message
    res.status(400).json({ message: `Error al eliminar el jugador` })
  }
}
// Export all functions
export {
  getJugadores,
  createJugador,
  getJugadorById,
  updateJugador,
  deleteJugadorById
}
