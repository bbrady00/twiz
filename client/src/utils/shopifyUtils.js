// Fetch products from your backend API
export const fetchProducts = async () => {
  try {
    const response = await fetch("/api/products"); // Replace with actual API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data; // Array of product objects
  } catch (error) {
    console.error("Error in fetchProducts:", error);
    throw error;
  }
};
