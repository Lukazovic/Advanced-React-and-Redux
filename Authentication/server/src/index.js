const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");

// DB setup
mongoose.connect("mongodb://127.0.0.1:27017/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// App setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
app.use(router);

// Server setup
const port = process.env.PORT || 3333;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
