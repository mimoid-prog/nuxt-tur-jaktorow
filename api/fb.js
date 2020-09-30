const axios = require("axios");

module.exports = async (req, res) => {
  const results = await axios.get(
    `https://graph.facebook.com/v8.0/lksturjaktorow/posts?limit=16&access_token=${process.env.FB_TOKEN}`
  );
  res.json({ results });
};
