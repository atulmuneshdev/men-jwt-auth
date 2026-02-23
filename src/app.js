const express = require('express')
const { connectedDB } = require('./config/DB')
const router = require('./routes/user.router')
const cookie = require('cookie-parser')
require('dotenv/config')


const app = express()
app.use(express.json())
// cookie
app.use(cookie())

connectedDB()

app.use('/api',router)




module.exports = app