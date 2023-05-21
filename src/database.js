import mongoose from 'mongoose'
import { MONGO_URI } from './config.js'

const connectWithRetry = () => {
  console.log('Conectando a la base de datos...')
  mongoose
    .connect(MONGO_URI)
    .then(() => console.info('Conexión a la base de datos establecida'))
    .catch(error => {
      console.error('Error al conectar a la base de datos:', error)
      setTimeout(connectWithRetry, 5000)
    })
}

connectWithRetry()

setInterval(() => {
  if (mongoose.connection.readyState === 0) {
    console.warn(
      'Conexión a la base de datos perdida, intentando reconectar...'
    )
    connectWithRetry()
  }
}, 10000)
