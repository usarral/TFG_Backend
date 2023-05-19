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
    res.status(200).json({ message: 'Club no encontrado' })
    return
  }

  res.status(200).json({
    message: 'Club encontrado',
    data: {
      id: club._id,
      nombre: club.nombreClub,
      NIF: club.NIFClub,
      direccion: club.direccionClub,
      ciudad: club.ciudadClub,
      provincia: club.provinciaClub,
      CP: club.CPClub,
      telefono: club.telefonoClub,
      email: club.emailClub,
      web: club.webClub,
      equipos: club.equiposClub,
      sanciones: club.sancionesClub,
      escudo: club.escudoClub
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
        nombre: clubCreado.nombreClub,
        NIF: clubCreado.NIFClub,
        direccion: clubCreado.direccionClub,
        ciudad: clubCreado.ciudadClub,
        provincia: clubCreado.provinciaClub,
        CP: clubCreado.CPClub,
        telefono: clubCreado.telefonoClub,
        email: clubCreado.emailClub,
        web: clubCreado.webClub,
        escudo: clubCreado.escudoClub
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
  club.nombreClub = nombre
  club.NIFClub = NIF
  club.direccionClub = direccion
  club.ciudadClub = ciudad
  club.provinciaClub = provincia
  club.CPClub = CP
  club.telefonoClub = telefono
  club.emailClub = email
  club.webClub = web
  club.escudoClub = escudo
  try {
    const clubActualizado = await club.save()
    res.status(200).json({
      message: 'Club actualizado',
      data: {
        id: clubActualizado._id,
        nombre: clubActualizado.nombreClub,
        NIF: clubActualizado.NIFClub,
        direccion: clubActualizado.direccionClub,
        ciudad: clubActualizado.ciudadClub,
        provincia: clubActualizado.provinciaClub,
        CP: clubActualizado.CPClub,
        telefono: clubActualizado.telefonoClub,
        email: clubActualizado.emailClub,
        web: clubActualizado.webClub,
        escudo: clubActualizado.escudoClub
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
