const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors');
const {mongoose} = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database connected'))
.catch((err)=> console.log('Database failed to connect',err))

const app = express()

app.use('/',require('./routes/authRoutes'))

const port = 3000;
app.listen(port,()=> console.log(`Server is running on port ${port}`))