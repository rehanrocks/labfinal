require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const attractionRoutes = require('./routes/attractions');
const visitorRoutes = require('./routes/visitors');
const reviewRoutes = require('./routes/reviews');

const app = express();

app.use(cors());

app.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

app.use('/attractions', attractionRoutes);
app.use('/visitors', visitorRoutes);
app.use('/reviews', reviewRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
