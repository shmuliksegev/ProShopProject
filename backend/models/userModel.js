import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:boolean,
        required:true,
        default:false
        //this for that when a users registers they not an admin 
    },
          
},
//this for create fields automatically
{timestamps:true})

const User = mongoose.model('User',userSchema)

export default User