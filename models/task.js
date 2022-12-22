const moongose = require('mongoose')

const TaskScehma = new moongose.Schema({
  name:{
    type:String,
    required:[true, 'name must be provided'],
    trim:true,
    maxlength:[20, 'must not be greater than 20 characters']
  }, 
  completed:{
    type:Boolean,
    default:false
  }  
})

module.exports = moongose.model('Task', TaskScehma)  