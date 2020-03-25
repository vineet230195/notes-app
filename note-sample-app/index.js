const express = require('express')
const routes = require('./config/routes')
const cors=require('cors')
const setupDB = require('./config/database')
const app = express()
const PORT = 3034

// express to read json data
app.use(express.json())
app.use(cors())
app.use('/', routes)

// connect to db
setupDB()

app.get('/', (req, res) => {
    res.json({ text: 'welcome to the website'})
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})