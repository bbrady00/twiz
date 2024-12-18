const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Ensure required environment variables exist
if (
  !process.env.MONGO_URI ||
  !process.env.SHOPIFY_STORE ||
  !process.env.SHOPIFY_ADMIN_API_KEY
) {
  console.error("Missing required environment variables.");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Shopify Integration: Fetch Products
const fetchShopifyProducts = async () => {
  try {
    const shopifyURL = `https://${process.env.SHOPIFY_STORE}/admin/api/2023-01/products.json`;
    const response = await axios.get(shopifyURL, {
      headers: {
        "X-Shopify-Access-Token": process.env.SHOPIFY_ADMIN_API_KEY,
      },
    });
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products from Shopify:", error.message);
    throw error;
  }
};

// Routes
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Shopify Products Route
app.get("/api/shopify/products", async (req, res) => {
  try {
    const products = await fetchShopifyProducts();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to fetch Shopify products",
        error: error.message,
      });
  }
});

// Error Handler Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
