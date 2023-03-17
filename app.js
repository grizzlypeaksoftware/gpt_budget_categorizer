const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Set up the OpenAI API client
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai_api = new OpenAIApi(configuration);

app.post('/categorize', async (req, res) => {

  const categories = req.body.categories; // Get the budget categories array from the request body
  const memo = req.body.memo; // Get the transaction memo from the request body

  // Set up the OpenAI API parameters
  const prompt = `Budget categories are ${categories.join(", ")}. Given the following transaction, please return the relevant budget category for the transaction. (Please only return the category and no other words or characters). ${memo}`;
  const parameters = {
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 64,
    temperature: 0.8
  };

  // Call the OpenAI API to generate the relevant budget category for the transaction
  const completion = await openai_api.createCompletion(parameters);

  var unfilteredResponse = completion.data.choices[0].text;
  var category = "uncategorized";

  for(var i = 0; i < categories.length; i++){
    if (unfilteredResponse.includes(categories[i])) {
        category = categories[i];
    } 
  }

  // Return the generated budget category to the client
  res.json({ category:  category});
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});