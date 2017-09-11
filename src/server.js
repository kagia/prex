const path = require('path');
const express = require('express')

const connection = require('./connection')

connection.then(() => {
  const app = express();
  
  app.use(express.static(path.join(__dirname, '../public')))
  
  app.listen(8080)
});