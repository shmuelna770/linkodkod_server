import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import {postRout} from './routs/postRout.js'
config()

const app = express()


app.use(express.json());
app.use(cors())

app.use('/',postRout)


const PORT = process.env.PORT || 4770
app.listen(PORT,()=>{
    console.log(`server runing on http://localhost:${PORT}`);
    
})