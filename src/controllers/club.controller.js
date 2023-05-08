import Club from '../models/club.model.js'

const getClubs = async (req, res) => {
  let clubs = await Club.find()
  clubs = clubs.map(club => {
    return {
      id: club._id,
      nombre: club.nombre,
      email: club.email,
      web: club.web,
      escudo: club.escudo
    }
  })
  res.json(clubs)
}
const getClub = async (req, res) => {
  const { id } = req.params
  const club = await Club.findById(id)
  if (!club) {
    res.status(404).json({ error: 'Club no encontrado' })
    return
  }
  res.json({
    id: club._id,
    nombre: club.nombre,
    email: club.email,
    web: club.web,
    escudo: club.escudo
  })
}
const createClub = async (req, res) => {
  const {
    nombre,
    NIF,
    direccion,
    municipio,
    provincia,
    CP,
    telefono,
    email,
    web,
    escudo,
    responsable
  } = req.body
  const club = new Club({
    nombre,
    NIF,
    direccion,
    municipio,
    provincia,
    CP,
    telefono,
    email,
    web,
    escudo
  })
  try {
    const clubCreado = await club.save()
    res.status(201).json(clubCreado)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
const updateClub = async (req, res) => {
  const { id } = req.params
  const {
    nombre,
    NIF,
    direccion,
    municipio,
    provincia,
    CP,
    telefono,
    email,
    web,
    escudo
  } = req.body
  const club = await Club.findById(id)
  if (!club) {
    res.status(404).json({ error: 'Club no encontrado' })
    return
  }
  club.nombre = nombre
  club.NIF = NIF
  club.direccion = direccion
  club.municipio = municipio
  club.provincia = provincia
  club.CP = CP
  club.telefono = telefono
  club.email = email
  club.web = web
  club.escudo = escudo
  try {
    const clubActualizado = await club.save()
    res.json(clubActualizado)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
const deleteClub = async (req, res) => {
  const { id } = req.params
  const club = await Club.findById(id)
  if (!club) {
    res.status(404).json({ error: 'Club no encontrado' })
    return
  }
  try {
    await club.deleteOne({ _id: id })
  } catch (error) {
    res.status(400).json({ error: error.message })
    return
  }

  res.json({ message: 'Club eliminado correctamente' })
}

export { getClubs, getClub, createClub, updateClub, deleteClub }
