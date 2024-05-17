'use strict';

import express from 'express';
import cors from 'cors';
import { errorHandler } from 'lib-finance-service';

import { EMAIL_API } from './constants.js';

const app = express();

// Setting up Middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN, // reflecting the request origin
    credentials: true
}));

app.use(express.json({
    limit: '64kb' // Maximum request body size.
}));

app.use(express.urlencoded({
    limit: '32kb',
    extended: false
}));

// Email Route
import routes from './routes/index.js';

app.post(`${EMAIL_API}/send-mail`, routes.sendMail);

// Error Handler Middleware
app.use(errorHandler);

export default app;
