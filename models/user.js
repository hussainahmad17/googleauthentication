import mongoose, { models, Schema } from "mongoose"

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
   
}, {timestamps: true})
    

//creating the collection of data
const User =  models.User || mongoose.model("User", userSchema)
export default User