exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      ad: {
        message: "Discover exclusive NFT drops today!",
        link: "https://example.com"
      }
    })
  };
};