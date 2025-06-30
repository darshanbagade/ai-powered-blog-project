import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js'
const app = express()

//MONGODB
await connectDB()

//midddleware
app.use(cors())
app.use(express.json())
/*
express.json() is a in-built middleware that convert JSON data 
to javascript objects which is coming form the User's POST or PUT requests
*/

//route
app.get('/', (req,res)=> res.send("API is working"))

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, ()=>{
    console.log("Server is listening on Port ",PORT);
})

export default app