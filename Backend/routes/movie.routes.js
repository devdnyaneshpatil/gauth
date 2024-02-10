const express=require("express")
const { getMovies } = require("../controllers/movie.controllers")
const auth = require("../middlewares/auth.middleware")

const movieRouter=express.Router()


movieRouter.get("/",auth,getMovies)

module.exports=movieRouter

