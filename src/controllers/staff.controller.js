//Import Staff model
import Staff from '../models/staff.model.js'

// Function GetStaffs which return all staffs from DB or staffs filtered by club
const getStaffs = async (req, res) => {
  // Get all staffs from DB
  let staffs = await Staff.find()
  // If there are no staffs
  if (staffs.length === 0) {
    // Return 204 (No Content)
    res.status(204).json({ message: 'No hay staffs' })
    return
  }
  // If there are staffs
  staffs = staffs.map(staff => {
    // Map staffs to return only the data we want to show
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
      estado: staff.estadoStaff,
      cargo: staff.cargoStaff
    }
  })
  // Return staffs
  res.status(200).json({
    message: 'Staffs encontrados',
    data: staffs
  })
}
// Function CreateStaff which create a staff
const createStaff = async (req, res) => {
  // Get data from request body
  const {
    nombre,
    apellido,
    apellido2,
    DNI,
    fechaNacimiento,
    email,
    telefono,
    direccion,
    ciudad,
    provincia,
    CP,
    cargo,
    club,
    equipo,
    foto
  } = req.body
  // Create new staff
  const staff = new Staff({
    nombreStaff: nombre,
    apellidoStaff: apellido,
    apellido2Staff: apellido2,
    dniStaff: DNI,
    fechaNacimientoStaff: fechaNacimiento,
    emailStaff: email,
    telefonoStaff: telefono,
    direccionStaff: direccion,
    ciudadStaff: ciudad,
    provinciaStaff: provincia,
    CPStaff: CP,
    cargoStaff: cargo,
    clubStaff: club,
    equipoStaff: equipo,
    fotoStaff: foto
  })
  try {
    // Save staff in DB
    const savedStaff = await staff.save()
    // Return staff saved in DB
    res.status(201).json({
      message: 'Staff creado',
      data: savedStaff
    })
  } catch (error) {
    // If there is an error
    // Return error
    res.status(400).json({
      message: 'No se ha podido crear el staff'
    })
  }
}
// Function GetStaff which return a staff by id
const getStaffById = async (req, res) => {
  try {
    // Get id from params
    const { id } = req.params
    // Get staff by id
    const staff = await Staff.findById(id)
    // If there is no staff
    if (!staff) {
      // Return 404 (Not Found)
      res.status(404).json({ message: 'Staff no encontrado' })
      return
    }
    // Return staff
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
    // If there is an error
    // Return error
    res.status(400).json({
      message: 'No se ha podido encontrar el staff'
    })
  }
}
// Function UpdateStaff which update a staff by id
const updateStaff = async (req, res) => {
  try {
    // Get id from params
    const { id } = req.params
    // Get data from request body
    const {
      nombre,
      apellido,
      apellido2,
      DNI,
      fechaNacimiento,
      email,
      telefono,
      direccion,
      ciudad,
      provincia,
      CP,
      cargo,
      club,
      equipo,
      foto
    } = req.body
    // Query to db to get staff by id
    const staff = await Staff.findById(id)
    // If there is no staff
    if (!staff) {
      // Return 404 (Not Found)
      res.status(404).json({ message: 'Staff no encontrado' })
      return
    }
    // Update staff
    staff.nombreStaff = nombre
    staff.apellidoStaff = apellido
    staff.apellido2Staff = apellido2
    staff.dniStaff = DNI
    staff.fechaNacimientoStaff = fechaNacimiento
    staff.emailStaff = email
    staff.telefonoStaff = telefono
    staff.direccionStaff = direccion
    staff.ciudadStaff = ciudad
    staff.provinciaStaff = provincia
    staff.CPStaff = CP
    staff.cargoStaff = cargo
    staff.clubStaff = club
    staff.equipoStaff = equipo
    staff.fotoStaff = foto
    // Save staff in DB
    const savedStaff = await staff.save()
    // Return staff saved in DB
    res.status(200).json({
      message: 'Staff actualizado',
      data: {
        id: savedStaff._id,
        nombre: savedStaff.nombreStaff,
        apellido: savedStaff.apellidoStaff,
        apellido2: savedStaff.apellido2Staff,
        DNI: savedStaff.dniStaff,
        telefono: savedStaff.telefonoStaff,
        email: savedStaff.emailStaff,
        direccion: savedStaff.direccionStaff,
        ciudad: savedStaff.ciudadStaff,
        provincia: savedStaff.provinciaStaff,
        CP: savedStaff.CPStaff,
        fechaNacimiento: savedStaff.fechaNacimientoStaff,
        cargo: savedStaff.cargoStaff,
        club: savedStaff.clubStaff,
        equipo: savedStaff.equipoStaff,
        foto: savedStaff.fotoStaff
      }
    })
  } catch (error) {
    // If there is an error
    // Return error
    res.status(400).json({
      message: 'No se ha podido actualizar el staff'
    })
  }
}
// Function DeleteStaff which delete a staff by id
const deleteStaff = async (req, res) => {
  // Get id from params
  const { id } = req.params
  try {
    // Delete staff from DB
    await Staff.findByIdAndDelete(id)
    // if there is no staff
    if (!staff) {
      // Return 404 (Not Found)
      res.status(404).json({ message: 'Staff no encontrado' })
      return
    }
    // Return staff deleted
    res.json({
      message: 'Staff borrado'
    })
  } catch (error) {
    // If there is an error
    // Return error
    res.status(400).json({
      message: 'No se ha podido borrar el staff'
    })
  }
}
// Export object with all functions
export { getStaffs, getStaffById, createStaff, updateStaff, deleteStaff }
