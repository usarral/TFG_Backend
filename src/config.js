const PROTOCOL = process.env.SERVER_PROTOCOL || 'http'
const HOST = process.env.SERVER_HOST || 'localhost'
const BACKEND_PORT = process.env.BACKEND_PORT || 3000
const BACKEND_URL =
  process.env.BACKEND_URL || `${PROTOCOL}://${HOST}:${BACKEND_PORT}`
const TYPE = process.env.SERVER_ENV || 'dev'
const MONGO_URI =
  process.env.MONGO_URI ||
  `mongodb://${process.env.MONGO_ROOT_USERNAME || 'root'}:${
    process.env.MONGO_ROOT_PASSWORD || 'root'
  }@${process.env.MONGO_HOST || 'db'}:${process.env.MONGO_PORT || 27017}/${
    process.env.MONGO_DATABASE || 'app'
  }?authSource=admin`
export { BACKEND_PORT, TYPE, MONGO_URI, BACKEND_URL, PROTOCOL, HOST }
