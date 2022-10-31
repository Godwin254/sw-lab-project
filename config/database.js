//configure mongodb database
const mongoose = require('mongoose');
const db = mongoose.connection;
const {DB_URL} = process.env;
require('dotenv').config();

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});

module.exports = db;
