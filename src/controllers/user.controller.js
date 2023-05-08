import User from '../models/user.model.js'

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.json({
      message: error
    })
  }
}
const createUser = async (req, res) => {
  const user = new User({
    DNIUser: req.body.DNIUser,
    nombreUser: req.body.nombreUser,
    emailUser: req.body.emailUser,
    passwordUser: req.body.passwordUser,
    rolUser: req.body.rolUser
  })
  try {
    const savedUser = await user.save()
    res.json(savedUser)
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

export { getUsers, getUserById, createUser, deleteUser, updateUser }
