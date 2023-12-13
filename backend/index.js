const express = require('express')
const app = express();
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 8000
const {errorHandler} = require('./middleware/errorMiddleware')


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/projects', require('./routers/projectsRouter'))

app.use(errorHandler)
app.listen(port, console.log(`Server Running on port ${port}`))