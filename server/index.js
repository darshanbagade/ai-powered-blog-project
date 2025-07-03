import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {PORT} from './constants.js'
import connectDB from './configs/db.js'
import adminRouter from './routes/adminRouter.js'
import blogRouter from './routes/blogRoute.js'
//accessing the env credentials 
dotenv.config({
    path: './.env'
})


//initialize express application
const app  = express();

//adding the cors 
app.use(cors())
app.use(express.json())

//connecting the MONGO DB database
connectDB();


//routers
app.get('/',(req,res)=> ( res.send( "API is working.") ))
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)


const port =  PORT
//starting the server with listen
app.listen(port, ()=>{
    console.log("Server is running on the port : " + port)
})
