import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'

const login = async (req, res) => {
  let { DNI, password, fingerprint, page } = req.body
  if (!DNI || !password) {
    return res
      .status(400)
      .json({ message: 'Por favor rellene todos los campos' })
  }

  try {
    const user = await User.findOne({ DNIUser: DNI })
    const isMatch = password === user.passwordUser
    if (!user || !isMatch) {
      return res
        .status(400)
        .json({ message: 'Usuario o contraseña incorrecto' })
    }
    if (page !== user.rolUser) {
      return res
        .status(400)
        .json({ message: 'Usuario o contraseña incorrecto' })
    }
    user.fingerprintUser = fingerprint
    user.tokenUser = jwt.sign(
      {
        id: user._id,
        fingerprint: user.fingerprintUser,
        rol: user.rolUser
      },
      process.env.JWT_SECRET,
      { expiresIn: '48h' }
    )

    await user.save()

    // Send response
    res.status(200).json({
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

const logout = async (req, res) => {
  // Get the token and the fingerprint from the request body
  let { token, fingerprint } = req.body

  // Borrar el token y la huella dactilar del usuario en la base de datos
  try {
    const user = await User.findOne({ tokenUser: token })
    user.tokenUser = ''
    user.fingerprintUser = ''
    await user.save()
    res.status(200).json({ message: 'Usuario deslogeado correctamente' })
  } catch (error) {
    res.status(400).json({ message: 'Ocurrió un error' })
  }
}

const check = async (req, res) => {
  let { token, fingerprint } = req.body

  if (!token || !fingerprint) {
    return res
      .status(400)
      .json({ message: 'Por favor rellene todos los campos' })
  }

  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET)
    // Check if the fingerprint is the same
    if (decoded.fingerprint != fingerprint) {
      return res.status(401).json({ message: 'Token invalido' })
    }
    let user = await User.findById(decoded.id)
    // Check if the user exists
    if (!user) {
      // If the user doesn't exist, the token is invalid
      return res.status(401).json({ message: 'Token invalido' })
    }
    // Check if the token and the fingerprint are the same as the ones stored in the database
    if (user.tokenUser != token || user.fingerprintUser != fingerprint) {
      // If the token or the fingerprint are different, the token is invalid
      return res.status(401).json({ message: 'Token invalido' })
    }
    // If everything is correct, the token is valid
    return res.status(200).json({
      message: 'Token valido',
      data: {
        id: user._id,
        nombre: user.nombreUser,
        arbitro: user.arbitroUser,
        club: user.clubUser,
        rol: user.rolUser
      }
    })
  } catch (error) {
    // If the token is invalid, return an error
    if (error.name === 'TokenExpiredError') {
      // If the token has expired, return an error
      return res.status(401).json({ message: 'El token ha caducado' })
    } else if (error.message == 'invalid signature') {
      // If the token has been manipulated, return an error
      return res.status(401).json({ message: 'Token manipulado' })
    } else if (error.message == 'invalid token') {
      // If the token is invalid, return an error
      return res.status(401).json({ message: 'Token invalido' })
    } else {
      // If there is an error, return an error
      console.log('Ocurrió un error:', error.message)
      return res.status(401).json({ message: 'Token invalido' })
    }
  }
}

export { login, logout, check }
