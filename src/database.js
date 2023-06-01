import mongoose from 'mongoose'
import { MONGO_URI } from './config.js'

const connectWithRetry = () => {
  console.log('Conectando a la base de datos...')
  mongoose
    .connect(MONGO_URI)
    .catch(error => {
      console.error('Error al conectar a la base de datos, reintentando...')
      setTimeout(connectWithRetry, 5000)
    })
    .then(() => console.info('Conexión a la base de datos establecida'))
}

connectWithRetry()

setInterval(() => {
  if (mongoose.connection.readyState === 0) {
    console.warn(
      'Conexión a la base de datos perdida, intentando reconectar...'
    )
    connectWithRetry()
  }
}, 5000)
