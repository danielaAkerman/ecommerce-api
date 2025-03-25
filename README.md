# E-commerce Product Features API

A simple REST API that returns product features for an e-commerce system.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### GET /api/product-features
Returns a JSON object containing product features.

Example response:
```json
{
  "products": [
    {
      "id": 1,
      "name": "Smartphone X",
      "features": {
        "display": "6.5 inch OLED",
        "processor": "Snapdragon 8 Gen 2",
        "ram": "8GB",
        "storage": "256GB",
        "camera": "48MP + 12MP + 8MP",
        "battery": "4500mAh"
      }
    }
  ]
}
```

## Technologies Used
- Node.js
- Express.js
- Nodemon (for development) 