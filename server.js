require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookies = require("cookie-parser");
const app = express();
const port = 8000;
const db_name = 'onlyPans';

app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());
app.use(express.static('images'))
require('./server/config/mongoose.config')(db_name);
require('./server/routes/onlyPans.routes')(app)
app.listen(port, () => console.log(`Listening on port: ${port}`));

// Subscriptions
