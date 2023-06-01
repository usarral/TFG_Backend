import User from '../models/user.model.js'
import { createHash } from 'node:crypto'
const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json({
      message: 'Users retrieved successfully',
      data: users
    })
  } catch (error) {
    res.json({
      message: error
    })
  }
}

const createUser = async (req, res) => {
  const user = new User({
    DNIUser: req.body.DNI,
    nombreUser: req.body.nombre,
    emailUser: req.body.email,
    passwordUser: req.body.password,
    rolUser: req.body.rol,
    arbitroUser: req.body.arbitro ? req.body.arbitro : null,
    clubUser: req.body.club ? req.body.club : null,
    fingerprintUser: null,
    tokenUser: null
  })
  try {
    const savedUser = await user.save()
    res.json({
      message: 'User created successfully',
      data: {
        id: savedUser._id,
        DNI: savedUser.DNIUser,
        nombre: savedUser.nombreUser,
        email: savedUser.emailUser,
        password: savedUser.passwordUser,
        rol: savedUser.rolUser,
        lastBrowser: savedUser.lastBrowserUser
      }
    })
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const deleteUser = async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.id })
    res.json(removedUser)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          DNIUser: req.body.DNIUser,
          nombreUser: req.body.nombreUser,
          emailUser: req.body.emailUser,
          passwordUser: req.body.passwordUser,
          rolUser: req.body.rolUser
        }
      }
    )
    res.json(updatedUser)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const checkAuth = async (req, res) => {
  const { fingerprint } = req.body
  if (!fingerprint) {
    res.json({
      status: 'error',
      message: 'Fingerprint is required'
    })
    return
  }
  if (fingerprint === '601294688103192') {
    res.json({
      status: 'success'
    })
  }
  res.json({
    status: 'error',
    message: 'Fingerprint is not valid'
  })
}

export { getUserById, createUser, deleteUser, updateUser, checkAuth, getUsers }
