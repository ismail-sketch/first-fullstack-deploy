// server.js
const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors()); // включаем CORS

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Сервер работает!');
});

app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Привет, ${name}!` });
});

app.listen(5000, '0.0.0.0', () => console.log('Server running on http://localhost:5000'));
