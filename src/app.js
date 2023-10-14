
import { swaggerDocument } from './doc/swaggerDocument.js';

//Routes
import { manualRouter } from './routes/manual.js';

//Packages
import 'dotenv/config'
import express from "express";
import cors from 'cors'
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express'



const app = express()
const port = process.env.PORT


app.use(cors())
app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/manual',manualRouter)



async function main(){

    try{
        mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@diet-assist-db.lskotyy.mongodb.net/Alimentos?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })


    app.listen(port,()=> 
        console.log(`All good listening ${port} `)
    )

    }catch(err){
        console.log(`Something Wrong... ${err}`)
    }
    

}

main()
export default app