const express = require("express")
const mongoose = require("mongoose")

const app = express()
const url = "mongodb+srv://Ayushi:dKUhEiQLccBNJwi8@cluster0.jjayk.mongodb.net/myDB"
mongoose.connect(url)

const conn = mongoose.connection

conn.on('open', function(){
    console.log("connected to db...")
})

app.use(express.json())
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
const restaurantRout = require('./routers/restaurant')
app.use('/allorder',restaurantRout)



app.listen(3030, () => {
    console.log("Server is connected...")
})