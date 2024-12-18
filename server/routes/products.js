const express = require("express");
const {
  getProducts,
  syncShopifyProducts,
} = require("../services/shopifyService");
const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

// Sync products from Shopify
router.post("/sync", async (req, res) => {
  try {
    await syncShopifyProducts();
    res.json({ message: "Products synced with Shopify" });
  } catch (error) {
    res.status(500).json({ message: "Error syncing products" });
  }
});

module.exports = router;
