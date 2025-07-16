const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
require('dotenv').config();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/buses', busRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
