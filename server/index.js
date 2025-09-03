const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const port = process.env.PORT; 

app.get("/", (req, res) => {
    res.status(200).end("Home Page");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})