import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'

const login = async (req, res) => {
  let { DNI, password, fingerprint } = req.body

  try {
    const user = await User.findOne({ DNIUser: DNI })
    if (!user) {
      return res
        .status(400)
        .json({ message: 'Usuario o contraseña incorrecto' })
    }

    const isMatch = password === user.passwordUser

    if (!isMatch) {
      console.log(password)

      return res
        .status(400)
        .json({ message: 'Usuario o contraseña incorrecto' })
    }
    console.log(user)

    // Create token

    console.log(process.env.JWT_SECRET)

    user.tokenUser = token

    // Update user
    user.fingerprintUser = fingerprint

    console.log(user)

    const update = await user.updateOne(user)
    console.log(update)

    // Send response
    res.json({
      message: 'Usuario logeado correctamente',
      data: {
        id: user._id,
        nombre: user.nombreUser,
        arbitro: user.arbitroUser,
        club: user.clubUser,
        rol: user.rolUser,
        fingerprint: user.fingerprintUser,
        token: user.tokenUser
      }
    })
  } catch (error) {
    res.json({
      message: error
    })
  }
}

const logout = async (req, res) => {}

export { login, logout }
