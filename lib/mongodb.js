import mongoose from "mongoose";

export const connectMongoDB =async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URl)
        console.log("connected with db");
    } catch (error) {
        console.log("error is :" , error);   
    }
}
