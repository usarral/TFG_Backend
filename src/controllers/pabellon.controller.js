// Import Pabellon model
import Pabellon from '../models/pabellon.model.js'
// Function GetPabellones which return all pabellones from DB
const getPabellones = async (req, res) => {
  // Get all pabellones from DB
  let pabellones = await Pabellon.find()
  // If there are no pabellones
  if (pabellones.length === 0) {
    res.status(204).json({ message: 'No hay pabellones' })
    return
  }
  // If there are pabellones
  // Map pabellones to return only the data we want to show
  pabellones = pabellones.map(pabellon => {
    return {
      id: pabellon._id,
      nombre: pabellon.nombrePabellon,
      direccion: pabellon.direccionPabellon,
      ciudad: pabellon.ciudadPabellon,
      provincia: pabellon.provinciaPabellon,
      CP: pabellon.CPPabellon,
      telefono: pabellon.telefonoPabellon,
      email: pabellon.emailPabellon,
      partidos: pabellon.partidosPabellon
    }
  })
  // Return pabellones
  res.status(200).json({
    message: 'Pabellones encontrados',
    data: pabellones
  })
}
// Function GetPabellon which return a pabellon by id
const getPabellon = async (req, res) => {
  // Get pabellon by id
  const { id } = req.params
  const pabellon = await Pabellon.findById(id)
  // If there is no pabellon
  if (!pabellon) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'No hay pabellon' })
    return
  }
  // If there is pabellon
  res.status(200).json({
    message: 'Pabellon encontrado',
    data: {
      id: pabellon._id,
      nombre: pabellon.nombrePabellon,
      direccion: pabellon.direccionPabellon,
      ciudad: pabellon.ciudadPabellon,
      provincia: pabellon.provinciaPabellon,
      CP: pabellon.CPPabellon,
      telefono: pabellon.telefonoPabellon,
      email: pabellon.emailPabellon,
      partidos: pabellon.partidosPabellon
    }
  })
}
// Function CreatePabellon which create a new pabellon in DB
const createPabellon = async (req, res) => {
  // Get data from request body
  const {
    nombre,
    direccion,
    ciudad,
    provincia,
    CP,
    telefono,
    email,
    partidos
  } = req.body
  // Create a new pabellon
  const pabellon = new Pabellon({
    nombrePabellon: nombre,
    direccionPabellon: direccion,
    ciudadPabellon: ciudad,
    provinciaPabellon: provincia,
    CPPabellon: CP,
    telefonoPabellon: telefono,
    emailPabellon: email,
    partidosPabellon: partidos
  })
  // Save the new pabellon in DB
  const pabellonDB = await pabellon.save()
  // Return the new pabellon
  res.status(201).json({
    message: 'Pabellon creado',
    data: {
      id: pabellonDB._id,
      nombre: pabellonDB.nombrePabellon,
      direccion: pabellonDB.direccionPabellon,
      ciudad: pabellonDB.ciudadPabellon,
      provincia: pabellonDB.provinciaPabellon,
      CP: pabellonDB.CPPabellon,
      telefono: pabellonDB.telefonoPabellon,
      email: pabellonDB.emailPabellon,
      partidos: pabellonDB.partidosPabellon
    }
  })
}
// Function DeletePabellon which delete a pabellon by id
const deletePabellon = async (req, res) => {
  // Get pabellon by id
  const { id } = req.params
  // Delete pabellon from DB
  const pabellon = await Pabellon.findByIdAndDelete(id)
  // If there is no pabellon
  if (!pabellon) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Pabellon no encontrado' })
    return
  }
  // If there is pabellon
  res.status(200).json({
    message: 'Pabellon eliminado',
    data: {
      id: pabellon._id,
      nombre: pabellon.nombrePabellon,
      direccion: pabellon.direccionPabellon,
      ciudad: pabellon.ciudadPabellon,
      provincia: pabellon.provinciaPabellon,
      CP: pabellon.CPPabellon,
      telefono: pabellon.telefonoPabellon,
      email: pabellon.emailPabellon,
      partidos: pabellon.partidosPabellon
    }
  })
}
// Function UpdatePabellon which update a pabellon by id
const updatePabellon = async (req, res) => {
  // Get pabellon by id
  const { id } = req.params
  // Get data from request body
  const {
    nombre,
    direccion,
    ciudad,
    provincia,
    CP,
    telefono,
    email,
    partidos
  } = req.body

  // Update pabellon from DB
  const pabellonDB = await Pabellon.findByIdAndUpdate(
    id,
    {
      nombrePabellon: nombre,
      direccionPabellon: direccion,
      ciudadPabellon: ciudad,
      provinciaPabellon: provincia,
      CPPabellon: CP,
      telefonoPabellon: telefono,
      emailPabellon: email,
      partidosPabellon: partidos
    },
    { new: true }
  )
  // If there is no pabellon
  if (!pabellonDB) {
    res.status(404).json({ message: 'Pabellon no encontrado' })
    return
  }
  // If there is pabellon
  res.status(200).json({
    message: 'Pabellon actualizado',
    data: {
      id: pabellonDB._id,
      nombre: pabellonDB.nombrePabellon,
      direccion: pabellonDB.direccionPabellon,
      ciudad: pabellonDB.ciudadPabellon,
      provincia: pabellonDB.provinciaPabellon,
      CP: pabellonDB.CPPabellon,
      telefono: pabellonDB.telefonoPabellon,
      email: pabellonDB.emailPabellon,
      partidos: pabellonDB.partidosPabellon
    }
  })
}
// Export all functions
export {
  getPabellones,
  getPabellon,
  createPabellon,
  deletePabellon,
  updatePabellon
}
