const express = require('express')
const connectDB = require('./db/mongoose')
const partnersRouter = require('./routes/api/partners')
const path = require('path')

const app = express()
app.use(express.json())
connectDB()
app.use(partnersRouter)

// serve static assets in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log('server listening on ' + PORT)
})

// app.get('/', (req, res)=>{
//     res.send('API is running')
// })