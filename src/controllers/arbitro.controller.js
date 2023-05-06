import Arbitro from '../models/arbitro.model.js'

const getArbitros = async (req, res) => {
  let arbitros = await Arbitro.find()
  res.status(200).json(
    arbitros.map(arbitro => {
      return {
        id: arbitro._id,
        nombre: arbitro.nombreArbitro,
        apellido: arbitro.apellidoArbitro,
        apellido2: arbitro.apellido2Arbitro,
        foto: arbitro.fotoArbitro
      }
    })
  )
}
const getArbitroById = async (req, res) => {}
const createArbitro = async (req, res) => {}
const updateArbitroById = async (req, res) => {}
const deleteArbitroById = async (req, res) => {}

export {
  createArbitro,
  getArbitros,
  getArbitroById,
  updateArbitroById,
  deleteArbitroById
}
