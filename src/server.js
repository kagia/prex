import app from './app.js'
import connection from './connection'

const PORT = 8080

connection
  .then(() => {
    app.listen(PORT)
    console.info(`http://localhost:${PORT}`)
  })
  .catch((error) => {
    console.error(`failed to connect to db: ${error}`)
  })
