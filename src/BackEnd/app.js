require('dotenv').config();
const express = require('express');

const { SERVER_PORT } = process.env;


const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to Express");
});


// server setup
const server = app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});