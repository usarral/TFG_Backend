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
const createArbitro = async (req, res) => {
  let arbitro = new Arbitro({
    nombreArbitro: req.body.nombre,
    apellidoArbitro: req.body.apellido,
    apellido2Arbitro: req.body.apellido2,
    DNIArbitro: req.body.DNI,
    telefonoArbitro: req.body.telefono,
    emailArbitro: req.body.email,
    fechaNacimientoArbitro: req.body.fechaNacimiento,
    direccionArbitro: req.body.direccion,
    municipioArbitro: req.body.municipio,
    provinciaArbitro: req.body.provincia,
    CPArbitro: req.body.CP,
    fotoArbitro: req.body.foto
  })
  try {
    arbitro = await arbitro.save()
  } catch (err) {
    res.status(400).json(err)
    return
  }
  res.status(201).json({
    message: 'Arbitro creado correctamente',
    arbitro: {
      id: arbitro._id,
      nombre: arbitro.nombreArbitro,
      apellido: arbitro.apellidoArbitro,
      apellido2: arbitro.apellido2Arbitro,
      fechaNacimiento: arbitro.fechaNacimientoArbitro,
      DNI: arbitro.DNIArbitro,
      telefono: arbitro.telefonoArbitro,
      email: arbitro.emailArbitro,
      direccion: arbitro.direccionArbitro,
      municipio: arbitro.municipioArbitro,
      provincia: arbitro.provinciaArbitro,
      CP: arbitro.CPArbitro,
      foto: arbitro.fotoArbitro,
      partidos: arbitro.partidosArbitro,
      fechaAlta: arbitro.fechaAltaArbitro
    }
  })
}
const getArbitros = async (req, res) => {
  let arbitros = await Arbitro.find()
  res.status(200).json(
    arbitros.map(arbitro => {
      return {
        id: arbitro._id,
        nombre: arbitro.nombreArbitro,
        apellido: arbitro.apellidoArbitro,
        apellido2: arbitro.apellido2Arbitro,
        foto: arbitro.fotoArbitro
      }
    })
  )
}
const getArbitroById = async (req, res) => {
  let arbitro = await Arbitro.findById(req.params.id)
  if (!arbitro) {
    res.status(404).json({ message: 'Arbitro no encontrado' })
    return
  }
  res.status(200).json({
    id: arbitro._id,
    nombre: arbitro.nombreArbitro,
    apellido: arbitro.apellidoArbitro,
    apellido2: arbitro.apellido2Arbitro,
    fechaNacimiento: arbitro.fechaNacimientoArbitro,
    DNI: arbitro.DNIArbitro,
    telefono: arbitro.telefonoArbitro,
    email: arbitro.emailArbitro,
    direccion: arbitro.direccionArbitro,
    municipio: arbitro.municipioArbitro,
    provincia: arbitro.provinciaArbitro,
    CP: arbitro.CPArbitro,
    foto: arbitro.fotoArbitro,
    partidos: arbitro.partidosArbitro,
    fechaAlta: arbitro.fechaAltaArbitro
  })
}
const updateArbitroById = async (req, res) => {
  let arbitro = await Arbitro.findById(req.params.id)
  if (!arbitro) {
    res.status(404).json({ message: 'Arbitro no encontrado' })
    return
  }

  arbitro.nombreArbitro = req.body.nombre
  arbitro.apellidoArbitro = req.body.apellido
  arbitro.apellido2Arbitro = req.body.apellido2
  arbitro.DNIArbitro = req.body.DNI
  arbitro.telefonoArbitro = req.body.telefono
  arbitro.emailArbitro = req.body.email
  arbitro.fechaNacimientoArbitro = req.body.fechaNacimiento
  arbitro.direccionArbitro = req.body.direccion
  arbitro.municipioArbitro = req.body.municipio
  arbitro.provinciaArbitro = req.body.provincia
  arbitro.CPArbitro = req.body.CP
  arbitro.fotoArbitro = req.body.foto
  try {
    arbitro = await arbitro.save()
  } catch (err) {
    res.status(400).json(err)
    return
  }
  res.status(200).json({
    message: 'Arbitro modificado correctamente',
    arbitro: {
      id: arbitro._id,
      nombre: arbitro.nombreArbitro,
      apellido: arbitro.apellidoArbitro,
      apellido2: arbitro.apellido2Arbitro,
      fechaNacimiento: arbitro.fechaNacimientoArbitro,
      DNI: arbitro.DNIArbitro,
      telefono: arbitro.telefonoArbitro,
      email: arbitro.emailArbitro,
      direccion: arbitro.direccionArbitro,
      municipio: arbitro.municipioArbitro,
      provincia: arbitro.provinciaArbitro,
      CP: arbitro.CPArbitro,
      foto: arbitro.fotoArbitro,
      partidos: arbitro.partidosArbitro,
      fechaAlta: arbitro.fechaAltaArbitro
    }
  })
}
const deleteArbitroById = async (req, res) => {
  let arbitro = await Arbitro.findById(req.params.id)
  if (!arbitro) {
    res.status(404).json({ message: 'Arbitro no encontrado' })
    return
  }
  try {
    await Arbitro.deleteOne({ _id: req.params.id })
  } catch (err) {
    res.status(400).json(err)
    return
  }
  res.status(200).json({
    message: 'Arbitro eliminado correctamente'
  })
}

export {
  createArbitro,
  getArbitros,
  getArbitroById,
  updateArbitroById,
  deleteArbitroById
}
