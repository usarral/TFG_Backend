const PORT = process.env.SERVER_PORT || 3000
const TYPE = process.env.SERVER_ENV || 'dev'
const MONGO_URI =
  process.env.MONGO_URI ||
  `mongodb://${process.env.MONGO_ROOT_USERNAME || 'root'}:${
    process.env.MONGO_ROOT_PASSWORD || 'root'
  }@${process.env.MONGO_HOST || 'localhost'}:${process.env.MONGO_PORT || 27017}`
export { PORT, TYPE, MONGO_URI }
