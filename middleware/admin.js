import jwt from "jsonwebtoken"

export const AdminVerify = async(req,res,next)=>{

    try{
let token =  req.header("AdminAuth")

if(!token){
    return res.status(403).send("Access Denied")
   } 
   if(token.startsWith("Bearer ")){
    token = token.slice(7, token.length).trimLeft()
   }
   const verified = jwt.verify(token,process.env.JWT_SECRET)
   req.admin = verified

   next()

    }catch(err){
        res.status(500).json({err})
    }

}