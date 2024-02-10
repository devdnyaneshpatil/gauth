const mongoose=require("mongoose")

const moviesSchema=mongoose.Schema({
    title:String,
    rating:Number
})


const MovieModel=mongoose.model("movie",moviesSchema)


module.exports=MovieModel