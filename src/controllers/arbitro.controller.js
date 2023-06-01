// Import Arbitro Model
import Arbitro from '../models/arbitro.model.js'
// Function GetArbitros which return all arbitros from DB
const getArbitros = async (req, res) => {
  // Query to DB
  let arbitros = await Arbitro.find()
  // If there are no arbitros
  if (arbitros.length === 0) {
    // Return 204 (No Content)
    res.status(204).json({ message: 'No hay arbitros' })
    return
  }
  // If there are arbitros
  // Map arbitros to return only the data we want to show
  arbitros = arbitros.map(arbitro => {
    return {
      id: arbitro._id,
      // If arbitro has foto, return it, if not, return a random avatar with his initials
      foto:
        arbitro.fotoArbitro ||
        'https://ui-avatars.com/api/?name=' +
          arbitro.nombreArbitro.substring(0, 1) +
          '+' +
          arbitro.apellidoArbitro.substring(0, 1) +
          '&background=random',

      nombre: arbitro.nombreArbitro,
      apellido: arbitro.apellidoArbitro,
      apellido2: arbitro.apellido2Arbitro,
      DNI: arbitro.DNIArbitro,
      fechaNacimiento: arbitro.fechaNacimientoArbitro,
      estado: arbitro.estadoArbitro
    }
  })
  // Return 200 (OK) and the data of the arbitros
  res.status(200).json({
    message: 'Arbitros encontrados',
    data: arbitros
  })
}
// Function GetArbitro which return one arbitro from DB
const getArbitro = async (req, res) => {
  // Get the arbitro id from the request params
  const { id } = req.params
  // Query to DB
  const arbitro = await Arbitro.findById(id)
  // If there isn't any arbitro with that id
  if (!arbitro) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Arbitro no encontrado' })
    return
  }
  // If there is an arbitro with that id
  // Return 200 (OK) and the data of the arbitro
  res.status(200).json({
    message: 'Arbitro encontrado',
    data: {
      id: arbitro._id,
      nombre: arbitro.nombreArbitro,
      apellido: arbitro.apellidoArbitro,
      apellido2: arbitro.apellido2Arbitro,
      DNI: arbitro.DNIArbitro,
      telefono: arbitro.telefonoArbitro,
      email: arbitro.emailArbitro,
      fechaNacimiento: arbitro.fechaNacimientoArbitro,
      direccion: arbitro.direccionArbitro,
      ciudad: arbitro.ciudadArbitro,
      provincia: arbitro.provinciaArbitro,
      CP: arbitro.CPArbitro,
      // If arbitro has foto, return it, if not, return a random avatar with his initials
      foto:
        arbitro.fotoArbitro ||
        'https://ui-avatars.com/api/?name=' +
          arbitro.nombreArbitro +
          '+' +
          arbitro.apellidoArbitro +
          '&background=random',
      partidos: arbitro.partidosArbitro,
      fechaAlta: arbitro.fechaAltaArbitro
    }
  })
}
// Function CreateArbitro which create a new arbitro on DB
const createArbitro = async (req, res) => {
  // Get the data from the request body
  const {
    nombre,
    apellido,
    apellido2,
    DNI,
    telefono,
    email,
    fechaNacimiento,
    direccion,
    ciudad,
    provincia,
    CP,
    estado,
    foto
  } = req.body
  // Create a new arbitro with the data from the request body
  const arbitro = new Arbitro({
    nombreArbitro: nombre,
    apellidoArbitro: apellido,
    apellido2Arbitro: apellido2,
    DNIArbitro: DNI,
    telefonoArbitro: telefono,
    emailArbitro: email,
    fechaNacimientoArbitro: fechaNacimiento,
    direccionArbitro: direccion,
    ciudadArbitro: ciudad,
    provinciaArbitro: provincia,
    CPArbitro: CP,
    estadoArbitro: estado || 'Pendiente',
    fotoArbitro: foto
  })
  try {
    // Save the arbitro on DB
    const arbitroCreado = await arbitro.save()
    // Return 201 (Created) and the data of the new arbitro created
    res.status(201).json({
      message: 'Arbitro creado',
      data: {
        id: arbitroCreado._id,
        nombre: arbitroCreado.nombreArbitro,
        apellido: arbitroCreado.apellidoArbitro,
        apellido2: arbitroCreado.apellido2Arbitro,
        DNI: arbitroCreado.DNIArbitro,
        telefono: arbitroCreado.telefonoArbitro,
        email: arbitroCreado.emailArbitro,
        fechaNacimiento: arbitroCreado.fechaNacimientoArbitro,
        direccion: arbitroCreado.direccionArbitro,
        ciudad: arbitroCreado.ciudadArbitro,
        provincia: arbitroCreado.provinciaArbitro,
        CP: arbitroCreado.CPArbitro,
        foto: arbitroCreado.fotoArbitro,
        partidos: arbitroCreado.partidosArbitro,
        fechaAlta: arbitroCreado.fechaAltaArbitro
      }
    })
    // If there is an error
  } catch (err) {
    // Return 400 (Bad Request) and the error message
    res.status(400).json({ message: 'Error creando el arbitro' })
  }
}
// Function UpdateArbitro which update a arbitro on DB
const updateArbitro = async (req, res) => {
  // Get the arbitro id from the request params
  const { id } = req.params
  // Get the data from the request body
  const {
    nombre,
    apellido,
    apellido2,
    DNI,
    telefono,
    email,
    fechaNacimiento,
    direccion,
    ciudad,
    provincia,
    CP,
    foto
  } = req.body
  // Query to DB
  const arbitro = await Arbitro.findById(id)
  // If there isn't any arbitro with that id
  if (!arbitro) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Arbitro no encontrado' })
    return
  }
  // If there is an arbitro with that id
  arbitro.nombreArbitro = nombre || arbitro.nombreArbitro
  arbitro.apellidoArbitro = apellido || arbitro.apellidoArbitro
  arbitro.apellido2Arbitro = apellido2 || arbitro.apellido2Arbitro
  arbitro.DNIArbitro = DNI || arbitro.DNIArbitro
  arbitro.telefonoArbitro = telefono || arbitro.telefonoArbitro
  arbitro.emailArbitro = email || arbitro.emailArbitro
  arbitro.fechaNacimientoArbitro =
    fechaNacimiento || arbitro.fechaNacimientoArbitro
  arbitro.direccionArbitro = direccion || arbitro.direccionArbitro
  arbitro.ciudadArbitro = ciudad || arbitro.ciudadArbitro
  arbitro.provinciaArbitro = provincia || arbitro.provinciaArbitro
  arbitro.CPArbitro = CP || arbitro.CPArbitro
  arbitro.fotoArbitro = foto || arbitro.fotoArbitro
  // Save the arbitro on DB
  try {
    const arbitroActualizado = await arbitro.save()
    // Return 200 (OK) and the data of the arbitro updated
    res.status(200).json({
      message: 'Arbitro actualizado',
      data: {
        id: arbitroActualizado._id,
        nombre: arbitroActualizado.nombreArbitro,
        apellido: arbitroActualizado.apellidoArbitro,
        apellido2: arbitroActualizado.apellido2Arbitro,
        DNI: arbitroActualizado.DNIArbitro,
        telefono: arbitroActualizado.telefonoArbitro,
        email: arbitroActualizado.emailArbitro,
        fechaNacimiento: arbitroActualizado.fechaNacimientoArbitro,
        direccion: arbitroActualizado.direccionArbitro,
        ciudad: arbitroActualizado.ciudadArbitro,
        provincia: arbitroActualizado.provinciaArbitro,
        CP: arbitroActualizado.CPArbitro,
        foto: arbitroActualizado.fotoArbitro,
        partidos: arbitroActualizado.partidosArbitro,
        fechaAlta: arbitroActualizado.fechaAltaArbitro
      }
    })
    return
  } catch (err) {
    // If there is an error
    // Return 400 (Bad Request) and the error message
    res.status(400).json({ message: 'Error actualizando el arbitro' })
  }
}
// Function DeleteArbitro which delete a arbitro on DB
const deleteArbitro = async (req, res) => {
  // Get the arbitro id from the request params
  const { id } = req.params
  // Query to DB
  const arbitro = await Arbitro.findById(id)
  // If there isn't any arbitro with that id
  if (!arbitro) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Arbitro no encontrado' })
    return
  }
  // If there is an arbitro with that id
  try {
    // Delete the arbitro on DB
    await arbitro.deleteOne({ _id: id })
    // Return 200 (OK) and a message
    res.status(200).json({ message: 'Arbitro eliminado' })
  } catch (err) {
    // If there is an error
    // Return 400 (Bad Request) and the error message
    res.status(400).json({ message: 'Error eliminando el arbitro' })
  }
}
// Export the functions created
export { createArbitro, getArbitros, getArbitro, updateArbitro, deleteArbitro }
