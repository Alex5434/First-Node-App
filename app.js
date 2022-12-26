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
    await connectD('mongodb://alex5434:3Ccw3VB4VUGAiyZY@ac-0sdman7-shard-00-00.i3yfkuq.mongodb.net:27017,ac-0sdman7-shard-00-01.i3yfkuq.mongodb.net:27017,ac-0sdman7-shard-00-02.i3yfkuq.mongodb.net:27017/Task-managerDb?ssl=true&replicaSet=atlas-b96v7q-shard-0&authSource=admin&retryWrites=true&w=majority')
    app.listen(port,console.log(`server running on port ${port}..`))
  } catch (error) {
    console.log(error);
  } 
} 

start()