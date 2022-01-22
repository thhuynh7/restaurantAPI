const express = require('express');
const dotenv = require('dotenv');

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Testing
app.get('/', (req, res) => {
  res.json({ message: 'API Listening' });
});

// Add routes
app.post('/api/restaurants', (req, res) => {
  res.status(200).json({ success: true, message: 'Create a new restaurant' });
});

app.get('/api/restaurants', (req, res) => {
  res.status(200).json({ success: true, message: 'Show all restaurants' });
});

app.get('/api/restaurants/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Show restaurant ${req.params.id}` });
});

app.put('/api/restaurants/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Update restaurant ${req.params.id}` });
});

app.delete('/api/restaurants/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Delete restaurant ${req.params.id}` });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
