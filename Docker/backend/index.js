const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const data = [
  { id: 1,  name: 'Paris' },
  { id: 2,  name: 'Tokyo' },
  { id: 3,  name: 'New York' },
  { id: 4,  name: 'London' },
  { id: 5,  name: 'Sydney' },
  { id: 6,  name: 'Dubai' },
  { id: 7,  name: 'Rome' },
  { id: 8,  name: 'Barcelona' },
  { id: 9,  name: 'Berlin' },
  { id: 10, name: 'Rio de Janeiro' },
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

const server = app.listen(8000, () => {
  console.log(`Backend microservice running on ${server.address().port}`);
});

module.exports = server
