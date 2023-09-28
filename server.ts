import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import blogRoutes from './routes';

dotenv.config();

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(cors());

// DB Config
const mongod = new MongoMemoryServer();

// Connect to MongoDB
mongoose
  .connect(mongod.getUri(), { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

// Use Routes
app.use('/api/blogs', blogRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

