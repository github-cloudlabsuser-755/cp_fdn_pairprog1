// create web server with Express
const express = require('express')
const app = express()
const port = 3000

// serve static files
app.use(express.static('public'))

// create a route to handle comments
app.get('/comments', (req, res) => {
  res.send('Comments will go here!')
})

// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
