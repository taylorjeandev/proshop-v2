import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js';

connectDB(); // Connect to MongoDB

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('API is running!')
})

app.use('/api/products', productRoutes)
app.use(errorHandler);
app.use(notFound);


app.listen(port, () => console.log(`server started on port ${port}`))