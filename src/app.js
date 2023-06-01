import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { TYPE } from './config.js'
import authRoutes from './routes/auth.routes.js'
import arbitroRoutes from './routes/arbitro.routes.js'
import categoriaRoutes from './routes/categoria.routes.js'
import clubRoutes from './routes/club.routes.js'
import equipoRoutes from './routes/equipo.routes.js'
import jugadorRoutes from './routes/jugador.routes.js'
import pabellonRoutes from './routes/pabellon.routes.js'
import partidoRoutes from './routes/partido.routes.js'
// import sancionRoutes from './routes/sancion.routes.js'
import staffRoutes from './routes/staff.routes.js'
import userRoutes from './routes/user.routes.js'
import generalRoutes from './routes/general.routes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use(morgan(TYPE))
app.use('/auth', authRoutes)
app.use('/arbitro', arbitroRoutes)
app.use('/categoria', categoriaRoutes)
app.use('/club', clubRoutes)
app.use('/equipo', equipoRoutes)
app.use('/jugador', jugadorRoutes)
app.use('/pabellon', pabellonRoutes)
app.use('/partido', partidoRoutes)
// app.use('/sancion', sancionRoutes)
app.use('/staff', staffRoutes)
app.use('/user', userRoutes)
app.use('/', generalRoutes)

export default app
