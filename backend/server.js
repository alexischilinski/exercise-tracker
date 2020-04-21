const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json()) //parses json

const uri = process.env.ATLAS_URI //comes from mongodb atlas dashboard
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }) //deals with mongodb updates
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

//starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})