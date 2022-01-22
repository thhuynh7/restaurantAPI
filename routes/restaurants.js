const express = require('express');
const router = express.Router();

// Testing
// router.get('/', (req, res) => {
//   res.json({ message: 'API Listening' });
// });

// Add routes
router.post('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Create a new restaurant' });
});

router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Show all restaurants' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Show restaurant ${req.params.id}` });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Update restaurant ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ success: true, message: `Delete restaurant ${req.params.id}` });
});

module.exports = router;
