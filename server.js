const express = require('express')
const connectDB = require('./db/mongoose')
const partnersRouter = require('./routes/api/partners')

const app = express()
app.use(express.json())
connectDB()
const PORT = process.env.PORT || 5000
app.use(partnersRouter)





app.listen(PORT, ()=>{
    console.log('server listening on ' + PORT)
})

app.get('/', (req, res)=>{
    res.send('API is running')
})