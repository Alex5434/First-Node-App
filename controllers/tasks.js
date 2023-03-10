const Task = require('../models/task')

const getAllTasks = async(req, res)=>{
  try {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
  } catch (error) {
    res.status(404).json(error)
  }
}

const createTask = async(req, res)=>{
  try {
    const task = await Task.create(req.body);
    res.status(201).json({task}) 
  } catch (error) {
    res.status(500).json({error})
  }
}

const getTask = async(req, res)=>{
  try {
    const {id:taskId} = req.params
    const task = await Task.findOne({_id:taskId})
    if(!task){
      return res.status(404).json({msg:`No data found with the id ${taskId}`})
    }
    res.status(200).json({task})
    
  } catch (error) {
    res.status(500).json({error})
  }
}


const deleteTask = async(req, res)=>{
  try { 
    const {id:taskId} = req.params
    const data = await Task.findOneAndDelete({_id:taskId})
    if(!data){
      return res.status(404).json({msg:`No data found with the id ${taskId}`})
    }
    res.status(200).json({data})
    
  } catch (error) {
    res.status(500).json({error})
  }
}

const updateTask = async(req, res)=>{
  try {
    const {id:taskId} = req.params
    const task = await Task.findOneAndUpdate({_id:taskId}, req.body,{
      runValidators:true,
      new:true
    })
    if(!task){
      return res.status(404).json({msg:`No data found with the id ${taskId}`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg:error})
  }
}

module.exports={
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}