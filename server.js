const express = require('express');
const mongoose = require('mongoose');
const app = express();
const DB = "mongodb://localhost:27017";
const bookRoute = require('./routes/bookRoutes');
const bookController = require('./controllers/bookController');
// console.log(bookController.getAllBooks);
app.use(express.json());
mongoose
  .connect(DB, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
    .then(() => console.log("database connection success"));

app.use('/', bookRoute);
app.listen(3000, () => console.log('server running at 3000'));