const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');

const app = express();
dotenv.config({path:'.env'})

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

const routes = require('./src/routes/routes')
app.use('/', routes)

app.listen(process.env.PORT, () => {
  console.log(`Server running at port = ${process.env.PORT}`)
})