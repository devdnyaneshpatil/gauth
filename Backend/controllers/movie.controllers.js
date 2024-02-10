const MovieModel = require("../models/movie.model")

const getMovies=async(req,res)=>{
  try {
    const movies=await MovieModel.find()
    res.status(200).json({msg:movies})
  } catch (error) {
    res.status(400).json({msg:error.message})
  }
}

module.exports={getMovies}