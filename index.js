const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

//database connection with mongoose
const connectDB = async () => {
    try {
      const conn = await mongoose.connect('mongodb://localhost/LetsDo' );
        }
    catch (err) {
        console.log(err);
        }
  }

//error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);