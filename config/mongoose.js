const mongoose = require("mongoose");
const QUERY_STRING = "mongodb+srv://Mongodb:333mongo666@cluster0.u4ca5.mongodb.net/chatFSD?retryWrites=true&w=majority";



// Connection to DB
const db = mongoose.connect(QUERY_STRING,
    {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Conectado a la base de datos'))
.catch((error) => console.log(error));


module.exports = db;