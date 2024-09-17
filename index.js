require("dotenv").config();
const express = require("express");

const app = express();
const port = 2000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/login", (req, res) => {
  res.send("Login page");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
