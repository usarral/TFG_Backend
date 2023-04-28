// Crea una función que compruebe si un string es un ObjectId de MongoDB

const checkObjectId = id => {
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    return true
  }
  return false
}
