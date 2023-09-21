const axios = require('axios');

const apiKey = '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'; // Replace with your API key
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';

const openai = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  }
});

module.exports = openai;
