import app from './app.js'
import './database.js'
import { BACKEND_PORT } from './config.js'

app.listen(BACKEND_PORT, () => {
  console.log(`Backend listening at http://localhost:${BACKEND_PORT}`)
})
