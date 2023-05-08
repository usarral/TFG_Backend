import Sancion from '../models/sancion.model.js'

const getSanciones = async (req, res) => {
  let sanciones = await Sancion.find()
  sanciones = sanciones.map(sancion => {
    return {
      id: sancion._id,
      arbitro: sancion.arbitroSancion,
      destinatario: sancion.destinatarioSancion,
      fecha: sancion.fechaSancion
    }
  })
  res.json(sanciones)
}
const getSancionById = async (req, res) => {
  const { id } = req.params
  const sancion = await Sancion.findById(id)
  if (!sancion) {
    res.status(404).json({ error: 'Sancion no encontrada' })
    return
  }
  res.json({
    id: sancion._id,
    arbitroSancionador: sancion.arbitroSancion,
    tipo: sancion.tipoSancion,
    destinatario: sancion.destinatarioSancion,
    causa: sancion.causaSancion,
    fecha: sancion.fechaSancion,
    partido: sancion.partidoSancion
  })
}
const createSancion = async (req, res) => {
  const { arbitro, tipo, destinatario, causa, fecha, partido } = req.body
  const sancion = new Sancion({
    arbitroSancion: arbitro,
    tipoSancion: tipo,
    destinatarioSancion: destinatario,
    causaSancion: causa,
    fechaSancion: fecha,
    partidoSancion: partido
  })
  try {
    const sancionCreada = await sancion.save()
    res.status(201).json(sancionCreada)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const updateSancion = async (req, res) => {
  const { id } = req.params
  const { arbitro, tipo, destinatario, causa, fecha, partido } = req.body
  const sancion = await Sancion.findById(id)
  if (!sancion) {
    res.status(404).json({ error: 'Sancion no encontrada' })
    return
  }
  sancion.arbitroSancion = arbitro
  sancion.tipoSancion = tipo
  sancion.destinatarioSancion = destinatario
  sancion.causaSancion = causa
  sancion.fechaSancion = fecha
  sancion.partidoSancion = partido
  try {
    const sancionActualizada = await sancion.save()
    res.json(sancionActualizada)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const deleteSancion = async (req, res) => {
  const { id } = req.params
  const sancion = await Sancion.findById(id)
  if (!sancion) {
    res.status(404).json({ error: 'Sancion no encontrada' })
    return
  }
  try {
    await sancion.deleteOne({ _id: id })
  } catch (error) {
    res.status(500).json({ error: error.message })
    return
  }
  res.json({ message: 'Sancion eliminada' })
}

export {
  getSanciones,
  getSancionById,
  createSancion,
  updateSancion,
  deleteSancion
}
