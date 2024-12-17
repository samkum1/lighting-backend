const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');
const connectDB = require('./config/db');
const updateUserCron = require('./cron/UpdateUserInfoCron');

const app = express();

connectDB();

app.use(cors()); 

app.use(cors({
  origin: ['http://localhost:5173', "https://lighting-three.vercel.app"],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);

updateUserCron()

module.exports = app;
