// require your server and launch it
const server = require('./api/server');
const express = require('express');

const PORT = process.env.PORT || 3003
const app = express();

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello its the server!'
  });
});

server.listen(4000, () => {
    console.log('\n* Server Running on http://localhost:5000 *\n');
  });