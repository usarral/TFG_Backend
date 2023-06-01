// // Import Sancion model
// import Sancion from '../models/sancion.model.js'
// // Function GetSanciones which return all sanciones from DB or sanciones filtered by arbitro, destinatario or partido
// const getSanciones = async (req, res) => {
//   // Get all sanciones from DB
//   let sanciones = await Sancion.find()
//   // If there are no sanciones
//   if (sanciones.length === 0) {
//     // Return 204 (No Content)
//     res.status(204).json({ message: 'No hay sanciones' })
//     return
//   }
//   // If there are sanciones
//   // Map sanciones to return only the data we want to show
//   sanciones = sanciones.map(sancion => {
//     return {
//       arbitro: sancion.arbitroSancion,
//       causa: sancion.causaSancion,
//       destinatario: sancion.destinatarioSancion,
//       estado: sancion.estadoSancion,
//       fecha: sancion.fechaSancion,
//       id: sancion._id,
//       partido: sancion.partidoSancion,
//       tipo: sancion.tipoSancion
//     }
//   })
//   // If there is a query string
//   switch (req.query) {
//     case req.query.arbitro:
//       // Filter sanciones by arbitro
//       sanciones = sanciones.filter(sancion => {
//         // Return sanciones where arbitroSancion is equal to req.query.arbitro
//         return sancion.arbitroSancion.toString() === req.query.arbitro
//       })
//       break
//     case req.query.destinatario:
//       // Filter sanciones by destinatario
//       sanciones = sanciones.filter(sancion => {
//         // Return sanciones where destinatarioSancion is equal to req.query.destinatario
//         return sancion.destinatarioSancion.toString() === req.query.destinatario
//       })
//       break
//     case req.query.partido:
//       // Filter sanciones by partido
//       sanciones = sanciones.filter(sancion => {
//         // Return sanciones where partidoSancion is equal to req.query.partido
//         return sancion.partidoSancion.toString() === req.query.partido
//       })
//       break
//   }
//   // Return sanciones
//   res.status(200).json({
//     message: 'Sanciones encontradas',
//     data: sanciones
//   })
// }
// // Function GetSancion which return a sancion by id
// const getSancionById = async (req, res) => {
//   // Get id from params
//   const { id } = req.params
//   // Get sancion by id
//   const sancion = await Sancion.findById(id)
//   // If there is no sancion
//   if (!sancion) {
//     // Return 404 (Not Found)
//     res.status(404).json({ message: 'Sancion no encontrada' })
//     return
//   }
//   // Return sancion
//   res.json({
//     message: 'Sancion encontrada',
//     data: {
//       id: sancion._id,
//       arbitroSancionador: sancion.arbitroSancion,
//       causa: sancion.causaSancion,
//       destinatario: sancion.destinatarioSancion,
//       estado: sancion.estadoSancion || 'Pendiente',
//       fecha: sancion.fechaSancion,
//       partido: sancion.partidoSancion,
//       tipo: sancion.tipoSancion
//     }
//   })
// }
// // Function CreateSancion which create a sancion
// const createSancion = async (req, res) => {
//   // Get data from body request
//   const { tipo, fecha, causa, partido, sancionado } = req.body

//   let arbitroSancion
//   let clubSancion
//   let equipoSancion
//   let jugadorSancion
//   let staffSancion
//   let tipoSancion

//   if (tipo === 'Jugador') {
//     jugadorSancion = sancionado
//     tipoSancion = 'Jugador'
//   }
//   if (tipo === 'Staff') {
//     staffSancion = sancionado
//     tipoSancion = 'Staff'
//   }
//   if (tipo === 'Equipo') {
//     equipoSancion = sancionado
//     tipoSancion = 'Equipo'
//   }
//   if (tipo === 'Club') {
//     clubSancion = sancionado
//     tipoSancion = 'Club'
//   }
//   if (tipo === 'Arbitro') {
//     arbitroSancion = sancionado
//     tipoSancion = 'Arbitro'
//   }

//   console.log(
//     arbitroSancion,
//     tipoSancion,
//     jugadorSancion,
//     staffSancion,
//     equipoSancion,
//     clubSancion,
//     causa,
//     fecha,
//     partido
//   )

//   // Create new sancion
//   const sancion = new Sancion({
//     arbitroSancion,
//     tipoSancion,
//     jugadorSancion,
//     staffSancion,
//     equipoSancion,
//     clubSancion,
//     causaSancion: causa,
//     fechaSancion: fecha,
//     partidoSancion: partido,
//     estadoSancion: 'Pendiente'
//   })

//   try {
//     // Save sancion in DB
//     const sancionCreada = await sancion.save()
//     // Return sancion
//     res.status(201).json({
//       message: 'Sancion creada correctamente',
//       data: {
//         id: sancionCreada._id,
//         arbitro: sancionCreada.arbitroSancion,
//         causa: sancionCreada.causaSancion,
//         destinatario: sancionCreada.destinatarioSancion,
//         estado: sancionCreada.estadoSancion || 'Pendiente',
//         fecha: sancionCreada.fechaSancion,
//         partido: sancionCreada.partidoSancion,
//         tipo: sancionCreada.tipoSancion
//       }
//     })
//   } catch (error) {
//     // If there is an error
//     res.status(400).json({ message: 'Error al crear la sanción' })
//   }
// }
// // Function UpdateSancion which update a sancion by id
// const updateSancion = async (req, res) => {
//   // Get id from params
//   const { id } = req.params
//   // Get data from body request
//   const { arbitro, tipo, destinatario, estado, causa, fecha, partido } =
//     req.body
//   // Query to db to get sancion by id
//   const sancion = await Sancion.findById(id)
//   // If there is no sancion
//   if (!sancion) {
//     res.status(404).json({ message: 'Sancion no encontrada' })
//     return
//   }
//   // Update sancion
//   sancion.arbitroSancion = arbitro
//   sancion.causaSancion = causa
//   sancion.destinatarioSancion = destinatario
//   sancion.estadoSancion = estado
//   sancion.fechaSancion = fecha
//   sancion.partidoSancion = partido
//   sancion.tipoSancion = tipo
//   try {
//     // Save sancion in DB
//     const sancionActualizada = await sancion.save()
//     // Return sancion
//     res.json({
//       message: 'Sancion actualizada correctamente',
//       data: {
//         id: sancionActualizada._id,
//         arbitro: sancionActualizada.arbitroSancion,
//         causa: sancionActualizada.causaSancion,
//         destinatario: sancionActualizada.destinatarioSancion,
//         estado: sancionActualizada.estadoSancion || 'Pendiente',
//         fecha: sancionActualizada.fechaSancion,
//         partido: sancionActualizada.partidoSancion,
//         tipo: sancionActualizada.tipoSancion
//       }
//     })
//   } catch (error) {
//     // If there is an error
//     res.status(400).json({ message: 'Error al actualizar la sanción' })
//   }
// }
// // Function DeleteSancion which delete a sancion by id
// const deleteSancion = async (req, res) => {
//   // Get id from params
//   const { id } = req.params
//   // Query to db to get sancion by id
//   const sancion = await Sancion.findById(id)
//   // If there is no sancion
//   if (!sancion) {
//     // Return 404 (Not Found)
//     res.status(404).json({ message: 'Sancion no encontrada' })
//     return
//   }
//   try {
//     // Delete sancion from DB
//     await sancion.deleteOne({ _id: id })
//   } catch (error) {
//     // If there is an error
//     res.status(400).json({ message: 'Error al eliminar la sanción' })
//     return
//   }
//   // Return message
//   res.status(200).json({ message: 'Sancion eliminada' })
// }
// // Export all functions
// export {
//   getSanciones,
//   getSancionById,
//   createSancion,
//   updateSancion,
//   deleteSancion
// }
