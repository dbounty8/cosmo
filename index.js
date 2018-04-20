const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const familyController = require('./controllers/family.js');

var env = require('dotenv').config({
    path: path.join(__dirname, './dbcon.env'),
});

const app = express();
mongoose.connect(process.env.COSMOSDB_CONNSTR);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
  // we're connected!
  //console.log("Connected to DB");
// });


app.use(bodyParser.json())
app.get('/', (req, res) => res.send('Hello MongoDb!'));
app.post('/Family', familyController.post);
app.post('/Family/parent', familyController.post);
app.get('/Family', familyController.list);
app.get('/Family/:gender', familyController.get);

app.listen(3000, () => console.log('It works!'));
