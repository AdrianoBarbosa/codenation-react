const express = require('express')
const path = require('path')

const app = express()
const routes = express.Router()


routes.get('/semana1', function (req, res) {
    res.sendFile(path.join(`${__dirname}/../react-11/public/index.html`))
})

app.use('/', routes)
app.listen(8880)