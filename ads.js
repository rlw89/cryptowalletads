exports.handler = async () => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        ad: {
          message: "Discover exclusive NFT drops today!",
          link: "https://example.com"
        }
      })
    };
  } catch (error) {
    console.error("Error in ads.js:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An internal error occurred" })
    };
  }
};
