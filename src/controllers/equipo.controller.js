import Equipo from '../models/equipo.model.js'

// GET: Return all equipos
const getEquipos = async (req, res) => {
  let equipos = await Equipo.find()
  if (equipos.length === 0) {
    res.status(404).json({ message: 'No hay equipos' })
    return
  }
  equipos = equipos.map(equipo => {
    return {
      id: equipo._id,
      escudo: equipo.escudoEquipo,
      nombre: equipo.nombreEquipo,
      email: equipo.emailEquipo,
      telefono: equipo.telefonoEquipo
    }
  })
  res.status(200).json({
    message: 'Equipos encontrados',
    data: equipos
  })
}
const getEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findById(req.params.id)
    res.json(equipo)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
// POST: Create a new equipo
const createEquipo = async (req, res) => {
  const equipo = new Equipo({
    nombreEquipo: req.body.nombre,
    categoriaEquipo: req.body.categoria,
    responsableEquipo: req.body.responsable,
    emailEquipo: req.body.email,
    telefonoEquipo: req.body.telefono,
    direccionEquipo: req.body.direccion,
    ciudadEquipo: req.body.ciudad,
    provinciaEquipo: req.body.provincia,
    CPEquipo: req.body.CP,
    escudoEquipo: req.body.escudo,
    clubEquipo: req.body.club
  })
  try {
    const savedEquipo = await equipo.save()
    res.json(savedEquipo)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
// DELETE: Delete equipo by id
const deleteEquipo = async (req, res) => {
  const id = req.params.id
  try {
    await Equipo.deleteOne({ _id: id })
    res.status(200).json({ message: 'Deleted equipo', id: id })
  } catch (error) {
    res.json({
      message: error
    })
  }
}

const updateEquipo = async (req, res) => {
  const id = req.params.id
  const equipo = {
    nombreEquipo: req.body.nombre,
    categoriaEquipo: req.body.categoria,
    responsableEquipo: req.body.responsable,
    emailEquipo: req.body.email,
    telefonoEquipo: req.body.telefono,
    direccionEquipo: req.body.direccion,
    ciudadEquipo: req.body.ciudad,
    provinciaEquipo: req.body.provincia,
    CPEquipo: req.body.CP,
    escudoEquipo: req.body.escudo,
    clubEquipo: req.body.club
  }
  try {
    const updatedEquipo = await Equipo.updateOne({ _id: id }, { $set: equipo })
    res.json(updatedEquipo)
  } catch (error) {
    res.json({
      message: error
    })
  }
}

export { getEquipos, getEquipo, createEquipo, deleteEquipo, updateEquipo }
