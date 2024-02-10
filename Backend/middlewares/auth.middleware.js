const auth=async(req,res,next)=>{
    if(req.session.isAuth==true){
        next()
    }else{
        res.status(400).json({msg:"Not Authorized"})
    }
}

module.exports=auth