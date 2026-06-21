import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/apiRoutes.js';

// Load Environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Dynamic CORS configuration to allow localhost ports automatically in dev
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175',
  'https://anthrocarbon.vercel.app'
];

if (process.env.CLIENT_URL) {
  process.env.CLIENT_URL.split(',').forEach(url => {
    let trimmed = url.trim();
    if (trimmed.endsWith('/')) {
      trimmed = trimmed.slice(0, -1);
    }
    if (trimmed && !allowedOrigins.includes(trimmed)) {
      allowedOrigins.push(trimmed);
    }
  });
}

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow non-browser requests
    const isLocalhost = /^http:\/\/localhost(:\d+)?$/.test(origin);
    if (isLocalhost || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
  credentials: true,
}));
app.use(express.json());

// Mount API Routes
app.use('/api', apiRoutes);

// Root test route
app.get('/', (req, res) => {
  res.json({ message: 'AnthroCarbon API Server Running' });
});

// Database connection
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn('⚠️ MONGODB_URI is not defined in environment variables. Server is starting in mock database mode (in-memory or fallback required for active database connections).');
} else {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB Atlas'))
    .catch((err) => console.error('❌ MongoDB Atlas connection error:', err));
}

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`👉 CORS allowed origins: ${allowedOrigins.join(', ')}`);
});
