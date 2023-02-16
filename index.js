const express = require('express');
const dotenv =require("dotenv");
const port = 8000;

const db = require('./config/mongoose');
// const Contact = require('./models/contact');

const app = express();

dotenv.config();

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})


