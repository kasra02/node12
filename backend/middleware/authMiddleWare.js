import asyncHandler from "express-async-handler";
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
export const protect = asyncHandler(async (req,res,next)=>{
    let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer ')){
        const decoded = req.headers.authorization.split('Bearer ')[1]
        const {id} = jwt.verify(decoded,process.env.JWT_SECRET)
        req.user = await User.findById(id).select('-password')
    }else{
        res.status(401)
        throw new Error('you are not authorize')
    }


    next()
})