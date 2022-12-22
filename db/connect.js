const moongose = require('mongoose')


const connectDb = (url) =>{
  return  moongose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
  })
}

module.exports = connectDb