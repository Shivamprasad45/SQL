// app.js or server.js
const express = require('express');
const db = require('./DB/db');

const app = express();
const PORT = 3000;

app.get('/customers', (req, res) => {
  db.query('SELECT * FROM Customers', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
