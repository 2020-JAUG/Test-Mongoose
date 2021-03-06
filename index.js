const express = require("express");
const router = require("./router");
const db = require("./config/mongoose");
const port = 3000;
const cors = require("cors");
const app = express();



app.use(express.json());
app.use(cors());
app.use(router);

db
.then(() => {
    app.listen(port, () => console.log(`Node server runing on http://localhost: ${port}` ));
})
.catch((err) => console.log(err.message));