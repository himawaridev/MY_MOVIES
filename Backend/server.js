
// khai bao npm
const express = require('express');
const cors = require('cors')
// khai bao port  va mongoose
const app = express(); // port
const mongoose = require('mongoose');   // mongoDB
//
const webRouter = require('./router/router.js');
app.use(cors())
app.use(express.json());



// khai bao routes
app.use("/", webRouter); // web.js







// Xuat ra cong port va mongoose 
mongoose.connect('mongodb+srv://dunghoang22102003:22102003@cluster.3ztklar.mongodb.net/')
    .then(() => {
        app.listen(5000, () => {
            console.log('----- LISTENING ON PORT 5000. -----');  // port
        });
        console.log('----- CONNECTING TO SERVER MONGOOSE. -----');   // DB
    })
    .catch((err) => {
        console.log("----- CAN'T CONNECT TO SERVER MONGOOSE. ERROR: " + err.message + "-----");
    });



