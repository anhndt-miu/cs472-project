import dotenv from 'dotenv'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc';

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
app.use('/word', dictionaryRouter)
app.use('/word/trending', trendingRouter)

// Swagger
const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Dictionary API',
        version: '1.0.0',
        description: 'API Documentation for Dictionary Project'
      },
      servers: [
        {
          url: 'https://wap-1-cgdbeuhhdndge9f9.centralus-01.azurewebsites.net'
        }
      ]
    },
    apis: ['./routes/*.route.js'], 
  };

  // Initialize swagger-jsdoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


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
