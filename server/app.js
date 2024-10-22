import dotenv from 'dotenv';
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.config.js';  
import dictionaryRouter from './routes/dictionary.route.js';
import trendingRouter from './routes/trending.route.js'

// Init config
dotenv.config(); 

// Config app
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Connect DB
connectDB();

// Router
app.use('/search', dictionaryRouter)
app.use('/trending', trendingRouter)

// Handle not found
app.use((req, res, next) => {
    res.status(404).json({ msg: `${req.url} not found` })
})

// Handle exception
app.use((err, req, res, next) => {
    res.status(500).json({ msg: 'Something went wrong' })
})

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
