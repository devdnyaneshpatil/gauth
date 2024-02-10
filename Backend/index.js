const express=require("express")
const cors=require("cors")
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const connection = require("./db");
const userRouter = require("./routes/user.routes");
const movieRouter = require("./routes/movie.routes");
require("dotenv").config()

const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "mySessions",
});
const app=express()

app.use(cors())
app.use(express.json())
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: { maxAge: 60000 },
  })
);
app.use("/users",userRouter)
app.use("/movies",movieRouter)

app.get("/",(req,res)=>{
   req.session.isAuth=true
   console.log(req.session)
   res.send("hello")
})




app.listen(8080,async()=>{
    try {
       await connection
       console.log("connected to the server") 
    } catch (error) {
       console.log(error.message)
    }
})