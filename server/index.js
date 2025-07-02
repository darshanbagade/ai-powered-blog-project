import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

//accessing the env credentials 
dotenv.config({
    path: './.env'
})


//initialize express application
const app  = express();

//adding the cors 
app.use(cors())


const port =  process.env.PORT

//starting the server with listen
app.listen(port, ()=>{
    console.log("Server is running on the port : " + port)
})
