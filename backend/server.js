import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import petRoutes from './routes/petRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/pets', petRoutes);
app.get('/', (req, res) => {
    res.send('🐾 Happy Tails API is running smoothly...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server sprinting on port ${PORT}`));