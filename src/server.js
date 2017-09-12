const app = require('./app')
const connection = require('./connection')

const PORT = 8080

connection.then(() => {
  app.listen(PORT)
  console.info(`http://localhost:${PORT}`)
})
