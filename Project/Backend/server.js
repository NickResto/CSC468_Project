
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting server: ${err}`);
    process.exit(1);
  }
  console.log(`Server running on port ${PORT}`);
});