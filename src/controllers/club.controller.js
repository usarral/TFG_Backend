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
const createClub = async (req, res) => {}
const updateClub = async (req, res) => {}
const deleteClub = async (req, res) => {}

export { getClubs, getClub, createClub, updateClub, deleteClub }
