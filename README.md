# Full-Stack Shopify Integration with React and MongoDB

This is a full-stack application that integrates a React frontend with a Node.js/Express backend, connecting to Shopify's Admin API and MongoDB for data management. The application allows users to interact with Shopify data (e.g., products, orders) and displays the data dynamically on the frontend.

---

## Features

- **Frontend**:

  - Built with React for a modern, responsive UI.
  - Fetches Shopify data and displays it dynamically.
  - Styled for user-friendly interaction.

- **Backend**:
  - Node.js/Express for server-side logic.
  - Integration with Shopify Admin API for e-commerce functionality.
  - MongoDB with Mongoose for data storage and management.

---

## Prerequisites

- **Frontend**:

  - Node.js (v14 or higher)
  - React (created using Vite or Create React App)

- **Backend**:
  - Node.js (v14 or higher)
  - MongoDB (local or cloud)
  - Shopify Partner account with Admin API credentials

---

## Installation

### Clone the Repository

```bash
git clone "https://github.com/bbrady00/twiz"
cd twiz
```

## Backend Setup

1. ## Navigate to the backend directory:

   `cd server`

2. ## Install dependencies:

   `npm install`

3. ## Create a `.env` file in the backend depository with the following variables:

```PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
SHOPIFY_API_KEY=<your_shopify_api_key>
SHOPIFY_API_SECRET=<your_shopify_api_secret>
SHOPIFY_ACCESS_TOKEN=<your_shopify_store_access_token>
SHOPIFY_STORE_NAME=<your_shopify_store_name>
```

4. ## Start the server:
   `npm start`

The backend will run on `http://localhost:5000`.

## Frontend Setup

1. ## Navigate to the frontend directory:

   `cd client`

2. ## Install dependencies:

   `npm install`

3. ## Create a `.env` file in the frontend depository with the following variables:

   `VITE_API_URL=http://localhost:5000`

4. ## Start the development server:
   `npm run dev`

The frontend will run on `http://localhost:5173`.

## File Structure

### Backend

`server/
├── config/
│   └── db.js                # MongoDB connection configuration
├── middleware/
│   └── errorHandler.js      # Custom error handling middleware
├── models/
│   └── Product.js           # Mongoose model for products
├── routes/
│   └── proucts.js           # API routes for Shopify
├── server.js                # Main backend server file
├── .env                     # Backend environment variables
└── package.json             # Backend dependencies and scripts
`

### Frontend

`client/
├── src/
│   ├── components/          # React components
│   ├── pages/               # Application pages
│   ├── App.jsx              # Main React app component
│   ├── index.jsx            # Entry point for the React app
│   └── assets/              # Images and styles
├── public/                  # Static files
├── .env                     # Frontend environment variables
├── .eslint.config.js        # Custom eslint styling
└── package.json             # Frontend dependencies and scripts
`

### Development

## Run Backend:

`cd server
npm start`

## Run Frontend:

`cd client
npm run dev
`

### Deployment

1. /*/*Backend:
   Use services like Heroku, Vercel, or AWS.
   Ensure MongoDB and Shopify credentials are securely stored.
2. /*/*Frontend:
   Deploy the React app on Netlify, Vercel, or similar platforms.
   Update the VITE_API_URL in the .env file to point to the deployed backend.
