/* TODO:
[X] Crear un arbitro
  [] Validar que el arbitro no exista
  [] Validar que el arbitro tenga todos los campos
  [] Validar que el arbitro tenga un DNI valido
  [] Validar que el arbitro tenga un email valido
  [] Validar que el arbitro tenga un telefono valido
  [] Validar que el arbitro tenga una fecha de nacimiento valida
[X] Obtener todos los arbitros
[X] Obtener un arbitro por ID
[] Modificar un arbitro por ID
[] Eliminar un arbitro por ID

*/

import Arbitro from '../models/arbitro.model.js'
const getArbitros = async (req, res) => {
  let arbitros = await Arbitro.find()
  if (arbitros.length === 0) {
    res.status(404).json({ message: 'No hay arbitros' })
    return
  }
  arbitros = arbitros.map(arbitro => {
    return {
      id: arbitro._id,
      foto: arbitro.fotoArbitro,
      nombre: arbitro.nombreArbitro,
      apellido: arbitro.apellidoArbitro,
      apellido2: arbitro.apellido2Arbitro,
      DNI: arbitro.DNIArbitro,
      fechaNacimiento: arbitro.fechaNacimientoArbitro,
      estado: arbitro.estadoArbitro
    }
  })
  res.status(200).json({
    message: 'Arbitros encontrados',
    data: arbitros
  })
}

const getArbitro = async (req, res) => {
  const { id } = req.params
  const arbitro = await Arbitro.findById(id)
  if (!arbitro) {
    res.status(404).json({ message: 'Arbitro no encontrado' })
    return
  }
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
      foto: arbitro.fotoArbitro,
      partidos: arbitro.partidosArbitro,
      fechaAlta: arbitro.fechaAltaArbitro
    }
  })
}

const createArbitro = async (req, res) => {
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
    fotoArbitro:
      foto ||
      `https://ui-avatars.com/api/?name=${nombre}+${apellido}&background=random`
  })
  try {
    const arbitroCreado = await arbitro.save()
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
  } catch (err) {
    res.status(400).json({ message: 'Error creando el arbitro' })
    return
  }
}

const updateArbitro = async (req, res) => {
  const { id } = req.params
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
  const arbitro = await Arbitro.findById(id)
  if (!arbitro) {
    res.status(404).json({ message: 'Arbitro no encontrado' })
    return
  }
  arbitro.nombreArbitro = nombre
  arbitro.apellidoArbitro = apellido
  arbitro.apellido2Arbitro = apellido2
  arbitro.DNIArbitro = DNI
  arbitro.telefonoArbitro = telefono
  arbitro.emailArbitro = email
  arbitro.fechaNacimientoArbitro = fechaNacimiento
  arbitro.direccionArbitro = direccion
  arbitro.ciudadArbitro = ciudad
  arbitro.provinciaArbitro = provincia
  arbitro.CPArbitro = CP
  arbitro.fotoArbitro = foto
  try {
    arbitroActualizado = await arbitro.save()
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
  } catch (err) {
    res.status(400).json({ message: 'Error actualizando el arbitro' })
    return
  }
}
const deleteArbitro = async (req, res) => {
  const { id } = req.params
  const arbitro = await Arbitro.findById(id)
  if (!arbitro) {
    res.status(404).json({ message: 'Arbitro no encontrado' })
    return
  }
  try {
    await arbitro.deleteOne({ _id: id })
    res.status(200).json({ message: 'Arbitro eliminado' })
  } catch (err) {
    res.status(400).json({ message: 'Error eliminando el arbitro' })
    return
  }
}

export { createArbitro, getArbitros, getArbitro, updateArbitro, deleteArbitro }
