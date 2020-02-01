const express = require('express');
const connectDB = require('./config/db');

const app = express();
// connect DB

connectDB();
// init middelWare
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send(res.json));
// Define Routes
app.use('/users', require('./routes/api/User'));
app.use('/gallery', require('./routes/api/gallery'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, err =>
  err ? console.log(err) : console.log('server is running on port', PORT)
);
