const express = require('express');
const dotenv = require('dotenv');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'API Listening' });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
