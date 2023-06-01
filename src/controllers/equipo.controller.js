// Import Equipo model
import Equipo from '../models/equipo.model.js'

// Function GetEquipos which return all equipos from DB if there isn't any filter, or return the filtered equipos
const getEquipos = async (req, res) => {
  // Get all equipos from DB
  let equipos = await Equipo.find()

  // If there are no equipos
  if (equipos.length === 0) {
    // Return 204 (No Content)
    res.status(204).json({ message: 'No hay equipos' })
    return
  }
  // If there are equipos
  equipos = equipos.map(equipo => {
    return {
      id: equipo._id,
      escudo:
        equipo.escudoEquipo ||
        `https://ui-avatars.com/api/?name=${equipo.nombreEquipo.substring(
          0,
          1
        )}&background=random`,
      nombre: equipo.nombreEquipo,
      email: equipo.emailEquipo,
      telefono: equipo.telefonoEquipo,
      club: equipo.clubEquipo.toString()
    }
  })
  // If there is a query string
  if (req.query.club) {
    // Filter equipos by club
    equipos = equipos.filter(equipo => equipo.club === req.query.club)
  }
  // Return equipos
  res.status(200).json({
    message: 'Equipos encontrados',
    data: equipos
  })
}
// GET: Return equipo by id
const getEquipo = async (req, res) => {
  try {
    // Get equipo by id
    const equipo = await Equipo.findById(req.params.id)
    // If there is no equipo
    if (!equipo) {
      // Return 404 (Not Found)
      res.status(404).json({ message: 'No hay equipo' })
      return
    }
    // If there is equipo
    res.status(200).json({
      message: 'Equipo encontrado',
      data: {
        id: equipo._id,
        nombre: equipo.nombreEquipo,
        categoria: equipo.categoriaEquipo,
        responsable: equipo.responsableEquipo,
        email: equipo.emailEquipo,
        telefono: equipo.telefonoEquipo,
        direccion: equipo.direccionEquipo,
        ciudad: equipo.ciudadEquipo,
        provincia: equipo.provinciaEquipo,
        CP: equipo.CPEquipo,
        club: equipo.clubEquipo
      }
    })
  } catch (error) {
    // If there is an error
    res.status(200).json({
      message: error
    })
  }
}
// POST: Create a new equipo
const createEquipo = async (req, res) => {
  // Get data from request body
  const {
    nombre,
    categoria,
    responsable,
    email,
    telefono,
    direccion,
    ciudad,
    provincia,
    CP,
    escudo,
    club
  } = req.body
  // Create a new equipo
  const equipo = new Equipo({
    nombreEquipo: nombre,
    categoriaEquipo: categoria,
    responsableEquipo: responsable,
    emailEquipo: email,
    telefonoEquipo: telefono,
    direccionEquipo: direccion,
    ciudadEquipo: ciudad,
    provinciaEquipo: provincia,
    CPEquipo: CP,
    escudoEquipo: escudo,
    clubEquipo: club
  })

  try {
    // Save equipo in DB
    const savedEquipo = await equipo.save()
    // Return equipo
    res.status(200).json({
      message: 'Equipo creado',
      data: {
        id: savedEquipo._id,
        nombre: savedEquipo.nombreEquipo,
        categoria: savedEquipo.categoriaEquipo,
        responsable: savedEquipo.responsableEquipo,
        email: savedEquipo.emailEquipo,
        telefono: savedEquipo.telefonoEquipo,
        direccion: savedEquipo.direccionEquipo,
        ciudad: savedEquipo.ciudadEquipo,
        provincia: savedEquipo.provinciaEquipo,
        CP: savedEquipo.CPEquipo,
        escudo: savedEquipo.escudoEquipo,
        club: savedEquipo.clubEquipo
      }
    })
  } catch (error) {
    // If there is an error
    res.status(400).json({
      message: 'Error al crear equipo'
    })
  }
}
// DELETE: Delete equipo by id
const deleteEquipo = async (req, res) => {
  // Get id from request params
  const id = req.params.id
  // Delete equipo by id
  try {
    // Delete equipo by id
    await Equipo.deleteOne({ _id: id })
    // Return equipo
    res.status(200).json({ message: 'Deleted equipo', id })
  } catch (error) {
    // If there is an error
    res.status(400).json({ message: 'Error al borrar el equipo' })
  }
}

const updateEquipo = async (req, res) => {
  const {
    nombre,
    categoria,
    responsable,
    email,
    telefono,
    direccion,
    ciudad,
    provincia,
    CP,
    escudo,
    club
  } = req.body
  // Get id from request params
  const id = req.params.id
  // Update equipo by id
  const equipo = {
    nombreEquipo: nombre,
    categoriaEquipo: categoria,
    responsableEquipo: responsable,
    emailEquipo: email,
    telefonoEquipo: telefono,
    direccionEquipo: direccion,
    ciudadEquipo: ciudad,
    provinciaEquipo: provincia,
    CPEquipo: CP,
    escudoEquipo: escudo,
    clubEquipo: club
  }
  try {
    // Update equipo by id
    const updatedEquipo = await Equipo.updateOne({ _id: id }, { $set: equipo })
    // Return equipo

    res.status(200).json({
      message: 'Equipo actualizado',
      data: updatedEquipo
    })
  } catch (error) {
    // If there is an error
    res.status(400).json({ message: 'Error al actualizar el equipo' })
  }
}
// Export functions
export { getEquipos, getEquipo, createEquipo, deleteEquipo, updateEquipo }
