import Club from '../models/club.model.js'

const getClubs = async (req, res) => {
  let clubs = await Club.find()
  if (!clubs) {
    res.status(404).json({ message: 'No hay clubs' })
    return
  }
  clubs = clubs.map(club => {
    return {
      id: club._id,
      nombre: club.nombreClub,
      NIF: club.NIFClub,
      email: club.emailClub,
      telefono: club.telefonoClub,
      escudo:
        club.escudoClub ||
        `https://ui-avatars.com/api/?name=${club.nombreClub}&background=random`
    }
  })
  res.status(200).json({
    message: 'Clubs encontrados',
    data: clubs
  })
}
const getClub = async (req, res) => {
  const { id } = req.params
  const club = await Club.findById(id)
  if (!club) {
    res.status(404).json({ message: 'Club no encontrado' })
    return
  }
  res.status(200).json({
    message: 'Club encontrado',
    data: {
      id: club._id,
      nombre: club.nombre,
      NIF: club.NIF,
      direccion: club.direccion,
      ciudad: club.ciudad,
      provincia: club.provincia,
      CP: club.CP,
      telefono: club.telefono,
      email: club.email,
      web: club.web,
      equipos: club.equipos,
      sanciones: club.sanciones,
      escudo: club.escudo
    }
  })
}
const createClub = async (req, res) => {
  const {
    nombre,
    NIF,
    direccion,
    ciudad,
    provincia,
    CP,
    telefono,
    email,
    web,
    escudo,
    responsable
  } = req.body
  const club = new Club({
    nombreClub: nombre,
    NIFClub: NIF,
    direccionClub: direccion,
    ciudadClub: ciudad,
    provinciaClub: provincia,
    CPClub: CP,
    telefonoClub: telefono,
    emailClub: email,
    webClub: web,
    escudoClub: escudo,
    fechaAltaClub: new Date().toISOString(),
    responsableClub: responsable
  })
  try {
    const clubCreado = await club.save()
    res.status(201).json({
      message: 'Club creado',
      data: {
        id: clubCreado._id,
        nombre: clubCreado.nombre,
        NIF: clubCreado.NIF,
        direccion: clubCreado.direccion,
        ciudad: clubCreado.ciudad,
        provincia: clubCreado.provincia,
        CP: clubCreado.CP,
        telefono: clubCreado.telefono,
        email: clubCreado.email,
        web: clubCreado.web,
        escudo: clubCreado.escudo
      }
    })
  } catch (error) {
    res.status(400).json({ message: 'Error creando el club' })
  }
}
const updateClub = async (req, res) => {
  const { id } = req.params
  const {
    nombre,
    NIF,
    direccion,
    ciudad,
    provincia,
    CP,
    telefono,
    email,
    web,
    escudo
  } = req.body
  const club = await Club.findById(id)
  if (!club) {
    res.status(404).json({ message: 'Club no encontrado' })
    return
  }
  club.nombre = nombre
  club.NIF = NIF
  club.direccion = direccion
  club.ciudad = ciudad
  club.provincia = provincia
  club.CP = CP
  club.telefono = telefono
  club.email = email
  club.web = web
  club.escudo = escudo
  try {
    const clubActualizado = await club.save()
    res.status(200).json({
      message: 'Club actualizado',
      data: {
        id: clubActualizado._id,
        nombre: clubActualizado.nombre,
        NIF: clubActualizado.NIF,
        direccion: clubActualizado.direccion,
        ciudad: clubActualizado.ciudad,
        provincia: clubActualizado.provincia,
        CP: clubActualizado.CP,
        telefono: clubActualizado.telefono,
        email: clubActualizado.email,
        web: clubActualizado.web,
        escudo: clubActualizado.escudo
      }
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
const deleteClub = async (req, res) => {
  const { id } = req.params
  const club = await Club.findById(id)
  if (!club) {
    res.status(404).json({ message: 'Club no encontrado' })
    return
  }
  try {
    await club.deleteOne({ _id: id })
    res.status(200).json({ message: 'Deleted club', id: id })
  } catch (error) {
    res.status(400).json({ message: error.message })
    return
  }
}

export { getClubs, getClub, createClub, updateClub, deleteClub }
