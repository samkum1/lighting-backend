require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  THIRD_PARTY_API_URL: process.env.THIRD_PARTY_API_URL,
  THIRD_PARTY_API_KEY: process.env.THIRD_PARTY_API_KEY,
};
