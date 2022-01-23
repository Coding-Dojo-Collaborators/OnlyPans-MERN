const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;
const db_name = 'onlyPans';

require('./server/config/mongoose.config')(db_name);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('images'));
require('./server/routes/onlyPans.routes')(app);

app.listen(port, () => console.log(`Listening on port: port`)); 