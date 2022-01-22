// POST /api/restaurants
exports.createRestaurant = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Create a new restaurant' });  
}

// GET /api/restaurants
exports.getRestaurants = (req, res, next) => {
  res.status(200).json({ success: true, message: 'Show all restaurants' });
}

// GET /api/restaurants/:id
exports.getRestaurant = (req, res, next) => {
  res.status(200).json({ success: true, message: `Show restaurant ${req.params.id}` });  
}

// PUT /api/restaurants/:id
exports.updateRestaurant = (req, res, next) => {
  res.status(200).json({ success: true, message: `Update restaurant ${req.params.id}` });  
}

// DELETE /api/restaurants/:id
exports.deleteRestaurant = (req, res, next) => {
  res.status(200).json({ success: true, message: `Delete restaurant ${req.params.id}` });  
}