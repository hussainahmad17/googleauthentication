import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";

 
 

export const POST =async (request) => {
    const {name, email} =await request.json()
    await connectMongoDB();
    await User.create({name, email})
    return NextResponse.json({message:"POSTED"},{status:201})
} 