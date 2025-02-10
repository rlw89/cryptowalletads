const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// API endpoint for ads
app.get("/api/ads", (req, res) => {
  res.json({
    ad: {
      message: "Discover rare NFTs on Marketplace Y!",
      link: "https://example.com"
    }
  });
});

// API endpoint for authentication (auth.js equivalent)
app.get("/api/auth", (req, res) => {
  res.json({
    message: "User authenticated!"
  });
});

// API endpoint for clicks (click.js equivalent)
app.get("/api/click", (req, res) => {
  res.json({
    message: "Ad click recorded!"
  });
});

// API endpoint for payments (payments.js equivalent)
app.get("/api/payments", (req, res) => {
  res.json({
    message: "Payment processed!"
  });
});

// Fallback to serve index.html for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
