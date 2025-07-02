import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async ()=>{
    try {
        
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
        console.log(`MongoDB Connected! Host: ${connectionInstance.connection.host}`)
        


    } catch (error) {
        console.log("MONGO DB Error : " + error.message);
        
    }
}

export default connectDB