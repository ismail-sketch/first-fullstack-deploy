// server.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

app.post('/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Привет, ${name}!` });
});

app.listen(3000, '0.0.0.0', () => console.log('Server running on http://localhost:3000'));
