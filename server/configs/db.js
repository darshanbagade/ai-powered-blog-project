import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

let isConnected = false;

const connectDB = async () => {
    // Prevent multiple connections in serverless environment
    if (isConnected && mongoose.connection.readyState === 1) {
        console.log("Using existing MongoDB connection");
        return;
    }

    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_DB_URL}/${DB_NAME}`,
            {
                serverSelectionTimeoutMS: 5000,
                socketTimeoutMS: 45000,
                maxPoolSize: 10,
                minPoolSize: 5,
                maxIdleTimeMS: 30000,
            }
        );

        isConnected = true;
        console.log(`MongoDB Connected! Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO DB Error: " + error.message);
        isConnected = false;
        throw error; // Don't exit process in serverless environment
    }
};

export default connectDB;