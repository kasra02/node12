import asyncHandler from "express-async-handler";
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

export const authUser = asyncHandler(async (req, res)=>{
    console.log('hello')
    const {email,password} = req.body
    console.log(email,password)
    const user = await User.findOne({email})
    console.log(user);

    if(user && await user.matchPassword(password)){
        res.json({
            name:user.name,
            email:user.email,
            _id:user._id,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('USER OR PASSWORD IS WRONG')
    }
})

export const getUserProfile = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }else{
        res.status(401)
        throw new Error('user not found')
    }

})

export const registerUser = asyncHandler(async (req,res)=>{
    const {name,email,password} = req.body
    const userExists = await User.findOne({email})
    if(userExists){
        throw new Error('User aleady exists')
    }
    const user = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    if(user){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }else{
        res.status(404)
        throw new Error('error with registering')
    }
})

export const updateUserProfile = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user._id)
    if(user){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }
        const updatedUser = await user.save()
        if(updatedUser){
            res.send({
                _id:updatedUser._id,
                name:updatedUser.name,
                email:updatedUser.email,
                isAdmin:updatedUser.isAdmin,
                token:generateToken(updatedUser.password)
            })
        }

    }else{
        res.status(404)
        throw new Error('no user with mentioned detail')
    }
})