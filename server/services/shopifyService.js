const { Shopify } = require("@shopify/shopify-api");
const Product = require("../models/Product");

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: ["read_products"],
  HOST_NAME: process.env.HOST_NAME,
  IS_EMBEDDED_APP: false,
  API_VERSION: Shopify.ApiVersion.October23,
});

// Fetch products from MongoDB
const getProducts = async () => {
  return await Product.find({});
};

// Sync products from Shopify to MongoDB
const syncShopifyProducts = async () => {
  const session = await Shopify.Utils.loadOfflineSession(
    process.env.SHOPIFY_STORE
  );
  const {
    Product: ShopifyProduct,
  } = require("@shopify/shopify-api/dist/rest-resources/2023-10/index.js");
  const shopifyProducts = await ShopifyProduct.all({ session });

  for (const shopifyProduct of shopifyProducts) {
    const productData = {
      shopifyId: shopifyProduct.id,
      title: shopifyProduct.title,
      description: shopifyProduct.body_html,
      price: parseFloat(shopifyProduct.variants[0].price),
    };

    await Product.findOneAndUpdate(
      { shopifyId: shopifyProduct.id },
      productData,
      {
        upsert: true, // Create if not exists
      }
    );
  }

  console.log("Products synced from Shopify to MongoDB");
};

module.exports = { getProducts, syncShopifyProducts };
