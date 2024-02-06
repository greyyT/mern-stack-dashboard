import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import { clientRoutes, generalRoutes, managementRoutes, salesRoutes } from './routes';

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

// MONGODB CONNECTION
console.log('Connecting to MongoDB with mongoose...');
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.DATABASE_URL as string)
  .then(() => {
    console.log('Connected Succesfully!');
    app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`));
  })
  .catch((error: Error) => {
    console.log(`${error} did not connect`);
  });
