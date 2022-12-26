const express = require('express')
const app = express()
const Tasks = require('./routes/task')
const port = process.env.PORT || 3000
const notfound = require('./middleware/notFound')
const errorhandler = require('./middleware/errorHandler')
const connectD = require('./db/connect')
require('dotenv').config()


//middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', Tasks)
app.use(notfound)
app.use(errorhandler)

app.get('/', (req, res)=>{
  res.send("Hi  ")
})


const start = async()=>{
  try {
    await connectD(process.env.MOONGO_URI)
    app.listen(port,console.log(`server running on port ${port}..`))
  } catch (error) {
    console.log(error);
  }
} 

start()