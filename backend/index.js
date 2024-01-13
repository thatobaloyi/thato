const express = require('express')
const path = require('path')
const app = express();
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 8000
const {errorHandler} = require('./middleware/errorMiddleware')


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://thato-frontend.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// app.use(cors())
app.use('/api/projects', require('./routers/projectsRouter'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../frontend/dist')))

    app.get('*', (req, res)=>{
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')
        )
    })
}else{
    app.get('/', (req,res)=>{
        res.send("Please set to production")
    })
}

app.use(errorHandler)
app.listen(port, console.log(`Server Running on port ${port}`))
