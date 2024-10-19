const gemini = require('./api/Gemini');

const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/api/chat-req/:prompt', async (req, res) => {
  const prompt = req.params.prompt;
  const gemini_response = await gemini.chat_session(prompt);
  console.log(gemini_response.response.text());
  res.status(201).send(gemini_response.response.text());
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
