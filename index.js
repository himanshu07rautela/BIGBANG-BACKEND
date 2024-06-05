// app.js
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(express.json());
app.use(cors());

// Use routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
