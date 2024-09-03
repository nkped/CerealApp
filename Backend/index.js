import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import { mongoose} from 'mongoose';

const app = express();



app.get('/', (request, response) => {
    
    console.log(request);
    return response.status(234).send('Wellcome to mern stack')
});






mongoose
.connect(mongoDBURL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`App liiiistening on port ${PORT}`)
    });
    console.log('App is connected to database')
})
.catch((error) => {
    console.error(error)
})