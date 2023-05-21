import Staff from '../models/staff.model.js'

const getStaffs = async (req, res) => {
  let staffs = await Staff.find()
  if (staffs.length === 0) {
    res.status(200).json({ message: 'No hay staffs' })
    return
  }
  staffs = staffs.map(staff => {
    return {
      id: staff._id,
      foto:
        staff.fotoStaff ||
        'https://ui-avatars.com/api/?name=' +
          staff.nombreStaff.substring(0, 1) +
          '+' +
          staff.apellidoStaff.substring(0, 1) +
          '&background=random',
      nombre: staff.nombreStaff,
      apellido: staff.apellidoStaff,
      apellido2: staff.apellido2Staff,
      DNI: staff.dniStaff,
      fechaNacimiento: staff.fechaNacimientoStaff,
      email: staff.emailStaff,
      estado: staff.estadoStaff
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
    dniStaff: req.body.DNI,
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
    res.status(201).json({
      message: 'Staff creado',
      data: savedStaff
    })
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id)
    res.status(200).json({
      message: 'Staff encontrado',
      data: {
        id: staff._id,
        nombre: staff.nombreStaff,
        apellido: staff.apellidoStaff,
        apellido2: staff.apellido2Staff,
        DNI: staff.dniStaff,
        telefono: staff.telefonoStaff,
        email: staff.emailStaff,
        direccion: staff.direccionStaff,
        ciudad: staff.ciudadStaff,
        provincia: staff.provinciaStaff,
        CP: staff.CPStaff,
        fechaNacimiento: staff.fechaNacimientoStaff,
        cargo: staff.cargoStaff,
        club: staff.clubStaff,
        equipo: staff.equipoStaff,
        foto: staff.fotoStaff
      }
    })
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
    staff.dniStaff = req.body.DNI
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
    res.status(200).json({
      message: 'Staff actualizado',
      data: savedStaff
    })
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
