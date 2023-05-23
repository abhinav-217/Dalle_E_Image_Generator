import mongoose from "mongoose";

const connectDB = (url)=>{
    mongoose.set("strictQuery",true)
    mongoose.connect(url)
    .then((res)=>{console.log("Connected to MongoDB")})
    .catch((err)=>{console.log("Called the catch block")})
}

export default connectDB;