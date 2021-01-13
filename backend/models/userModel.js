import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
// create schema
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamp:true
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})



// create model based on created schema
const User = mongoose.model('User',userSchema)

export default User



