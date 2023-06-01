// Import Partido model
import Partido from '../models/partido.model.js'
import Equipo from '../models/equipo.model.js'
// Function GetPartidos which return all partidos from DB, or partidos filtered by club or arbitro
const getPartidos = async (req, res) => {
  // Get all partidos from DB
  let partidos = await Partido.find()
  // If there are no partidos
  if (partidos.length === 0) {
    // Return 204 (No Content)
    res.status(204).json({ message: 'No hay partidos' })
    return
  }
  // If there are partidos
  // Map partidos to return only the data we want to show
  partidos = partidos.map(partido => {
    return {
      id: partido._id,
      fecha: partido.fechaPartido,
      categoria: partido.categoriaPartido,
      pabellon: partido.pabellonPartido,
      equipoLocal: partido.equipoLocalPartido,
      equipoVisitante: partido.equipoVisitantePartido,
      arbitro: partido.arbitroPartido
    }
  })
  // Return partidos
  // If there is a query string
  if (req.query.club) {
    // Get all equipos from DB
    const equipos = await Equipo.find()
    // Filter partidos by club
    partidos = partidos.filter(partido => {
      // Query to db to get equipo by clubEquipo
      const equiposClub = equipos.filter(
        equipo => equipo.clubEquipo.toString() === req.query.club
      )
      // Return partidos where equipoLocal or equipoVisitante is in equiposClub
      return (
        equiposClub.find(
          equipo => equipo._id.toString() === partido.equipoLocal.toString()
        ) ||
        equiposClub.find(
          equipo => equipo._id.toString() === partido.equipoVisitante.toString()
        )
      )
    })
  }
  // Return partidos
  res.status(200).json({
    message: 'Partidos encontrados',
    data: partidos
  })
}
// Function GetPartido which return a partido by id
const getPartido = async (req, res) => {
  // Get partido by id
  const { id } = req.params
  // Query to db to get partido by id
  const partido = await Partido.findById(id)
  // If there is no partido
  if (!partido) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Partido no encontrado' })
    return
  }
  // If there is partido
  res.status(200).json({
    message: 'Partido encontrado',
    data: {
      id: partido._id,
      fecha: partido.fechaPartido,
      categoria: partido.categoriaPartido,
      pabellon: partido.pabellonPartido,
      equipoLocal: partido.equipoLocalPartido,
      equipoVisitante: partido.equipoVisitantePartido,
      golesLocal: partido.golesLocalPartido,
      golesVisitante: partido.golesVisitantePartido,
      arbitro: partido.arbitroPartido
    }
  })
}
// Function CreatePartido which create a new partido in DB
const createPartido = async (req, res) => {
  // Get data from request body
  const {
    fecha,
    categoria,
    pabellon,
    equipoLocal,
    equipoVisitante,
    arbitro,
    golesLocal,
    golesVisitante
  } = req.body
  // Create new partido
  const partido = new Partido({
    fechaPartido: fecha,
    categoriaPartido: categoria,
    pabellonPartido: pabellon,
    equipoLocalPartido: equipoLocal,
    equipoVisitantePartido: equipoVisitante,
    arbitroPartido: arbitro,
    golesLocalPartido: golesLocal,
    golesVisitantePartido: golesVisitante
  })
  // Save partido in DB
  const partidoGuardado = await partido.save().catch(err => {
    res.status(500).json({ message: 'Error al guardar partido en DB' })
    return
  })
  // Return partido
  res.status(201).json({
    message: 'Partido creado',
    data: {
      id: partidoGuardado._id,
      fecha: partidoGuardado.fechaPartido,
      categoria: partidoGuardado.categoriaPartido,
      pabellon: partidoGuardado.pabellonPartido,
      equipoLocal: partidoGuardado.equipoLocalPartido,
      equipoVisitante: partidoGuardado.equipoVisitantePartido,
      arbitro: partidoGuardado.arbitroPartido,
      golesLocal: partidoGuardado.golesLocalPartido,
      golesVisitante: partidoGuardado.golesVisitantePartido
    }
  })
}
const updatePartido = async (req, res) => {
  // Get id from request params
  const { id } = req.params
  // Get data from request body
  const {
    fecha,
    categoria,
    pabellon,
    equipoLocal,
    equipoVisitante,
    arbitro,
    golesLocal,
    golesVisitante
  } = req.body
  // Query to db to get partido by id
  const partido = await Partido.findByIdAndUpdate(
    id,
    {
      fechaPartido: fecha,
      categoriaPartido: categoria,
      pabellonPartido: pabellon,
      equipoLocalPartido: equipoLocal,
      equipoVisitantePartido: equipoVisitante,
      arbitroPartido: arbitro,
      golesLocalPartido: golesLocal,
      golesVisitantePartido: golesVisitante
    },
    { new: true }
  )
  // If there is no partido
  if (!partido) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Partido no encontrado' })
    return
  }
  // If there is partido
  res.status(200).json({
    message: 'Partido actualizado',
    data: {
      id: partido._id,
      fecha: partido.fechaPartido,
      categoria: partido.categoriaPartido,
      pabellon: partido.pabellonPartido,
      equipoLocal: partido.equipoLocalPartido,
      equipoVisitante: partido.equipoVisitantePartido,
      arbitro: partido.arbitroPartido,
      golesLocal: partido.golesLocalPartido,
      golesVisitante: partido.golesVisitantePartido
    }
  })
}
const deletePartido = async (req, res) => {
  // Get id from request params
  const { id } = req.params
  // Query to db to delete partido by id
  const partido = await Partido.findByIdAndDelete(id)
  // If there is no partido
  if (!partido) {
    // Return 404 (Not Found)
    res.status(404).json({ message: 'Partido no encontrado' })
    return
  }
  // If there is partido
  res.status(200).json({
    message: 'Partido eliminado',
    data: {
      id: partido._id,
      fecha: partido.fechaPartido,
      categoria: partido.categoriaPartido,
      pabellon: partido.pabellonPartido,
      equipoLocal: partido.equipoLocalPartido,
      equipoVisitante: partido.equipoVisitantePartido,
      arbitro: partido.arbitroPartido,
      golesLocal: partido.golesLocalPartido,
      golesVisitante: partido.golesVisitantePartido
    }
  })
}
// Export all functions
export { getPartidos, getPartido, createPartido, updatePartido, deletePartido }
