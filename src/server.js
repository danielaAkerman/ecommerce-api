const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Read product data from JSON file
let productFeatures;
try {
  productFeatures = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'products.json'), 'utf8')
  );
} catch (error) {
  console.error('Error reading products data:', error);
  process.exit(1);
}

// Routes
app.get('/api/product-features', (req, res) => {
  try {
    res.json(productFeatures);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// For Vercel deployment
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`API endpoint: http://localhost:${port}/api/product-features`);
  });
}

// Export the Express app for Vercel
module.exports = app; 