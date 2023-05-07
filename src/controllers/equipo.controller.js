import Equipo from '../models/equipo.model.js'

// GET: Return all equipos
const getEquipos = async (req, res) => {
  try {
    const equipos = await Equipo.find()
    res.json(equipos)
  } catch (error) {
    res.json({
      message: error
    })
  }
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
    municipioEquipo: req.body.municipio,
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
  try {
    const removedEquipo = await Equipo.deleteOne({
      _id: req.params.id
    })
    res.json(removedEquipo)
  } catch (error) {
    res.json({
      message: error
    })
  }
}

const updateEquipo = async (req, res) => {
  try {
    const updatedEquipo = await Equipo.updateOne(
      { _id: req.params.id },
      {
        $set: {
          nombre: req.body.nombre,
          escudo: req.body.escudo,
          jugadores: req.body.jugadores
        }
      }
    )
    res.json(updatedEquipo)
  } catch (error) {
    res.json({
      message: error
    })
  }
}

export { getEquipos, getEquipo, createEquipo, deleteEquipo, updateEquipo }
