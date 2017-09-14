import Promise from 'bluebird'
import mongoose from 'mongoose'

mongoose.Promise = Promise

export default mongoose
  .createConnection('mongodb://localhost', { useMongoClient: true })
