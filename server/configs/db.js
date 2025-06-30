import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected',()=>{
            console.log("MongoDB connected")
        })
        mongoose.connect(process.env.MONGO_DB_URL)
    } catch (error) {
        console.log(error.messsage);
    }
}
export default connectDB