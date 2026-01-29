import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB, { db } from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* -------------------- API -------------------- */
app.use('/api/users', userRoutes);

/* -------------------- Health Check -------------------- */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    database: db.readyState === 1 ? 'connected' : 'not-connected',
    timestamp: new Date().toISOString()
  });
});

/* -------------------- Frontend -------------------- */
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

  // ✅ Express 5–safe SPA fallback
  app.use((req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'frontend', 'dist', 'index.html')
    );
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

/* -------------------- Errors -------------------- */
app.use(notFound);
app.use(errorHandler);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});