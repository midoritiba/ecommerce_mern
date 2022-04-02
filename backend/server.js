import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

const PORT = process.env.PORT || 4001;

dotenv.config()
connectDB()
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API running...')
})


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))