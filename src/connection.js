const Promise = require('bluebird')
const mongoose = require('mongoose')

mongoose.Promise = Promise

const connection = mongoose.createConnection('mongodb://localhost', { useMongoClient: true })

module.exports = connection
