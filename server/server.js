// server.js
const express = require('express');
const cors = require("cors");
const app = express();

const { sequelize, User } = require('./models/User')





app.use(cors()); // включаем CORS

app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Сервер работает!');
});

app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Привет, ${name}!` });
});

// БАЗА ДАННЫХ =====================
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL');

    await sequelize.sync();
    console.log('Models synchronized');
  } catch (err) {
    console.error('Connection error:', err);
  }
})();


// Получение юзеров (тест)
app.get('/api/getusers', async (req, res) => {
  const users = await User.findAll();
    res.json(users);
})

// Создание юзеров==================
app.post('/api/createuser', async (req, res) => {

  const {name, email} = req.body
  
  const existing = await User.findOne({ where: { email } });
  if (existing) {
      return res.status(400).json({ message: 'Email уже существует' });
    }

  const users = await User.create({name, email})
  return res.json(users)
})

app.listen(5000, '0.0.0.0', () => console.log('Server running on http://localhost:5000'));
