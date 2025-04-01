import express from 'express'
import { config } from 'dotenv'
import { connectDB } from './config/database.js'
import cors from 'cors'

config()

connectDB()

const app = express()

const port = process.env.PORT

app.use(cors())
app.use(express.urlencoded(true))

app.use('/',(req,res)=>{
    console.log('Hello')
})  

app.listen(port,()=>{
    console.log(`Server running at port ${port}.`)
})