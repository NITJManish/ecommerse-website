const express = require('express');
const dotenv =require("dotenv");
const app = express();
const PORT=process.env.port || 8000;
const db = require('./config/mongoose');
const userRoute=require("./routes/user");

dotenv.config();


app.use(express.json());
app.use("/api/users",userRoute);

app.listen(PORT, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port 8000');
})


