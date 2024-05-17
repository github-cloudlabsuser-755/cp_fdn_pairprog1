// Create web server
// express is a web framework for node.js
const express = require('express')
const app = express()

// create a route for the app
// GET request to the root URL
app.get('/', (req, res) => {
  res.send('Hello World')
})

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})