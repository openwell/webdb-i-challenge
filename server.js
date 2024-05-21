const express = require("express");
const helmet = require('helmet')

const accountRoute = require("./accounts/accountRouter");

const server = express();
server.use(express.json());


server.use(logger, helmet());
server.use("/api/accounts", accountRoute);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.all("*", (req, res) => {
  res.status(404).json('Sorry No Such Location');
});
//custom middleware

function logger(req, res, next) {
  console.log(req.method, req.url, Date.now());
  next();
}

module.exports = server;