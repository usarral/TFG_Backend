import mongoose from 'mongoose'
import { MONGO_URI } from './config.js'

mongoose
  .connect(MONGO_URI)
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err))
