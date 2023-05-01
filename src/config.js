import dotenv from 'dotenv'
dotenv.config()
const PROTOCOL = process.env.SERVER_PROTOCOL || 'http'
const HOST = process.env.SERVER_HOST || 'localhost'
const PORT = process.env.SERVER_PORT || 3000
const BASEURL = process.env.BASEURL || `http://${HOST}:${PORT}`
const TYPE = process.env.SERVER_ENV || 'dev'
const MONGO_URI =
  process.env.MONGO_URI ||
  `mongodb://${process.env.MONGO_ROOT_USERNAME || 'root'}:${
    process.env.MONGO_ROOT_PASSWORD || 'root'
  }@${process.env.MONGO_HOST || 'localhost'}:${
    process.env.MONGO_PORT || 27017
  }/${process.env.MONGO_DATABASE || 'app'}?authSource=admin`
export { PORT, TYPE, MONGO_URI }
