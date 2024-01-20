// Create web server
// 1. Create web server
// 2. Connect to db
// 3. Create router
// 4. Create API
// 5. Listen port

// 1. Create web server
const express = require('express');
const app = express();

// 2. Connect to db
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('Connected to mongod server');
});
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect('mongodb://localhost/mongodb_tutorial');

// 3. Create router
const router = require('./routes')(app);

// 4. Create API
// 5. Listen port
const port = 8080;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
});