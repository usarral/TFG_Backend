import Pabellon from '../models/pabellon.model.js'

const getPabellones = async (req, res) => {
  let pabellones = await Pabellon.find()
  if (pabellones.length === 0) {
    res.status(404).json({ message: 'No hay pabellones' })
    return
  }
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
  res.status(200).json({
    message: 'Pabellones encontrados',
    data: pabellones
  })
}
const getPabellon = async (req, res) => {
  const { id } = req.params
  const pabellon = await Pabellon.findById(id)
  if (!pabellon) {
    res.status(404).json({ message: 'Pabellon no encontrado' })
    return
  }
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
const createPabellon = async (req, res) => {
  const pabellon = new Pabellon({
    nombrePabellon: req.body.nombre,
    direccionPabellon: req.body.direccion,
    ciudadPabellon: req.body.ciudad,
    provinciaPabellon: req.body.provincia,
    CPPabellon: req.body.CP,
    telefonoPabellon: req.body.telefono,
    emailPabellon: req.body.email,
    partidosPabellon: req.body.partidos
  })
  const pabellonDB = await pabellon.save()
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
const deletePabellon = async (req, res) => {
  const { id } = req.params
  const pabellon = await Pabellon.findByIdAndDelete(id)
  if (!pabellon) {
    res.status(404).json({ message: 'Pabellon no encontrado' })
    return
  }
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
const updatePabellon = async (req, res) => {
  const { id } = req.params
  const pabellon = await Pabellon.findByIdAndUpdate(
    id,
    {
      nombrePabellon: req.body.nombre,
      direccionPabellon: req.body.direccion,
      ciudadPabellon: req.body.ciudad,
      provinciaPabellon: req.body.provincia,
      CPPabellon: req.body.CP,
      telefonoPabellon: req.body.telefono,
      emailPabellon: req.body.email,
      partidosPabellon: req.body.partidos
    },
    { new: true }
  )
  if (!pabellon) {
    res.status(404).json({ message: 'Pabellon no encontrado' })
    return
  }
  res.status(200).json({
    message: 'Pabellon actualizado',
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

export {
  getPabellones,
  getPabellon,
  createPabellon,
  deletePabellon,
  updatePabellon
}
