const notFound = (req,res)=>{
  res.status(404).send("Router deosn't exist")
}

module.exports = notFound