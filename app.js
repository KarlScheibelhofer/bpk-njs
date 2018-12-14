const express = require('express')
const mountRoutes = require('./routes')
const port = 3000

const app = express()
app.use(express.json())

mountRoutes(app)

app.listen(port, () => console.log(`started at ${new Date().toLocaleString()} - listening on port ${port}!`))
