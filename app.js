const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const contactRoutes = require('./routes/contactRoutes') // We'll define routes next

const app = express()
const port = 3000

// Middleware
app.use(bodyParser.json())

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost/contactDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err))

// Routes
app.use('/contacts', contactRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
