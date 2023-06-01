import Club from '../models/club.model.js'
// Function GetClubs which return all clubs from DB
const getClubs = async (req, res) => {
  // Query to DB
  let clubs = await Club.find()
  // If there are no clubs
  if (!clubs) {
    // Return 204 (No Content)
    res.status(204).json({ message: 'No hay clubs' })
    return
  }
  // If there are clubs
  clubs = clubs.map(club => {
    // Return only the data we want to show
    return {
      id: club._id,
      nombre: club.nombreClub,
      NIF: club.NIFClub,
      email: club.emailClub,
      telefono: club.telefonoClub,
      // If club has escudo, return it, if not, return a random avatar with his initials
      escudo:
        club.escudoClub ||
        `https://ui-avatars.com/api/?name=${club.nombreClub}&background=random`
    }
  })
  // Return 200 (OK) and the data of the clubs
  res.status(200).json({
    message: 'Clubs encontrados',
    data: clubs
  })
}
// Function GetClub which return one club from DB
const getClub = async (req, res) => {
  // Get the club id from the request params
  const { id } = req.params
  // Query to DB
  const club = await Club.findById(id)
  // If there isn't any club with that id

  if (!club) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Club no encontrado' })
    return
  }
  // If there is an club with that id
  // Return 200 (OK) and the data of the club
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
      escudo:
        club.escudoClub ||
        `https://ui-avatars.com/api/?name=${club.nombreClub}&background=random`
    }
  })
}
// Function CreateClub which create a new club in DB
const createClub = async (req, res) => {
  // Get the club data from the request body
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
  // Create a new club with the data from the request body
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
    // Save the club in the DB
    const clubCreado = await club.save()
    // Return 201 (Created) and the data of the club created
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
    // Error handling
    res.status(400).json({ message: 'Error creando el club' })
  }
}
// Function UpdateClub which update a club in DB
const updateClub = async (req, res) => {
  // Get the club id from the request params
  const { id } = req.params
  // Get the club data from the request body
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
  // Query to DB
  const club = await Club.findById(id)
  // If there isn't any club with that id
  if (!club) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Club no encontrado' })
    return
  }
  // If there is an club with that id
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
    // Update the club in the DB
    const clubActualizado = await club.save()
    // Return 200 (OK) and the data of the club updated
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
    // Error handling
    res.status(400).json({ message: 'Error actualizando el club' })
  }
}
// Function DeleteClub which delete a club in DB
const deleteClub = async (req, res) => {
  // Get the club id from the request params
  const { id } = req.params
  // Query to DB
  const club = await Club.findById(id)
  // If there isn't any club with that id
  if (!club) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Club no encontrado' })
    return
  }
  try {
    // Delete the club in the DB
    await club.deleteOne({ _id: id })
    // Return 200 (OK) and the id of the club deleted
    res.status(200).json({ message: 'Deleted club', id })
  } catch (error) {
    // Error handling
    // Return 400 (Bad Request) and the error message
    res.status(400).json({ message: 'Error borrando el club' })
  }
}
// Export the functions to use them in the routes
export { getClubs, getClub, createClub, updateClub, deleteClub }
