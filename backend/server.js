// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const petRoutes = require('./petRoutes');
const errorHandler = require('./errorMiddleware');

// الاتصال بقاعدة البيانات
connectDB();

const app = express();

// Middlewares أساسية لمعالجة البيانات القادمة من الـ Frontend والـ CORS
app.use(cors()); // للسماح للفرونت اند بالاتصال بالباك اند إذا كانا على المنفذين مختلفين
app.use(express.json());

// توجيه المسارات
app.use('/api/pets', petRoutes);

// برمجية معالجة الأخطاء (يجب أن تكون في النهاية)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});