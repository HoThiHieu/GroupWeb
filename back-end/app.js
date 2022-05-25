const express = require('express')
const routes = require('./routes/index')
const cors = require('cors')

const app = express()
app.set('views', './src/views'); 
app.set('view engine', 'ejs');

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000', 'http://localhost:3001'],
    }),
)

app.use(express.json())

app.use('/api/auth',  routes.auth)
app.use('/api/users', routes.user)


module.exports = app
