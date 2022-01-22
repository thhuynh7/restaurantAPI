const express = require('express');
const dotenv = require('dotenv');

// Route files
const restaurants = require('./routes/restaurants');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routers
app.use('/api/restaurants', restaurants);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
