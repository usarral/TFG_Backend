import Staff from '../models/staff.model.js'

const getStaffs = async (req, res) => {
  let staffs = await Staff.find()
  if (staffs.length === 0) {
    res.status(404).json({
      message: 'No hay staffs'
    })
    return
  }
  staffs = staffs.map(staff => {
    return {
      id: staff._id,
      nombre: staff.nombreStaff,
      apellido: staff.apellidoStaff,
      apellido2: staff.apellido2Staff,
      fechaNacimiento: staff.fechaNacimientoStaff,
      DNI: staff.dniStaff,
      email: staff.emailStaff,
      estado: staff.estadoStaff,
      cargo: staff.cargoStaff,
      foto: staff.fotoStaff
    }
  })
  res.status(200).json({
    message: 'Staffs encontrados',
    data: staffs
  })
}
const createStaff = async (req, res) => {
  const staff = new Staff({
    nombreStaff: req.body.nombre,
    apellidoStaff: req.body.apellido,
    apellido2Staff: req.body.apellido2,
    dniStaff: req.body.dni,
    telefonoStaff: req.body.telefono,
    emailStaff: req.body.email,
    direccionStaff: req.body.direccion,
    ciudadStaff: req.body.ciudad,
    provinciaStaff: req.body.provincia,
    CPStaff: req.body.CP,
    fechaNacimientoStaff: req.body.fechaNacimiento,
    cargoStaff: req.body.cargo,
    clubStaff: req.body.club,
    equipoStaff: req.body.equipo,
    fotoStaff: req.body.foto
  })
  try {
    const savedStaff = await staff.save()
    res.json(savedStaff)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id)
    res.json(staff)
  } catch (error) {
    res.json({
      message: error
    })
  }
}

const updateStaff = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id)
    staff.nombreStaff = req.body.nombre
    staff.apellidoStaff = req.body.apellido
    staff.apellido2Staff = req.body.apellido2
    staff.dniStaff = req.body.dni
    staff.telefonoStaff = req.body.telefono
    staff.emailStaff = req.body.email
    staff.direccionStaff = req.body.direccion
    staff.ciudadStaff = req.body.ciudad
    staff.provinciaStaff = req.body.provincia
    staff.CPStaff = req.body.CP
    staff.fechaNacimientoStaff = req.body.fechaNacimiento
    staff.cargoStaff = req.body.cargo
    staff.clubStaff = req.body.club
    staff.equipoStaff = req.body.equipo
    const savedStaff = await staff.save()
    res.json(savedStaff)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const deleteStaff = async (req, res) => {
  const id = req.params.id
  try {
    await Staff.findByIdAndDelete(id)
    res.json({
      message: 'Staff borrado'
    })
  } catch (error) {
    res.json({
      message: error
    })
  }
}

export { getStaffs, getStaffById, createStaff, updateStaff, deleteStaff }
