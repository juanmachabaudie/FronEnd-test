const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");

const server = express();

server.name = "API";

server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

server.use("/", routes);

module.exports = server;
