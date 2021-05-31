const express = require("express");
const db = require("./config/mongoose");
const port = 3000;
const app = express();


app.use(express.json());

db
.then(() => {
    app.listen(port, () => console.log(`Node server runing on http://localhost: ${port}` ));
})
.catch((err) => console.log(err.message));