import bodyParser from 'body-parser';
import express from 'express'
import cors from 'cors'
import post from './routers/post.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const URL = process.env.DATABASE_URL;
//'mongodb://localhost:27017/test_my_database'
//'mongodb+srv://admin:00000000@cluster0.iamyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

app.use('/posts', post)


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected');
        app.listen(PORT, () => {
            console.log(`App start at port ${PORT}`);
        })
    }).catch(err => {
        console.log('err ', err)
    })



