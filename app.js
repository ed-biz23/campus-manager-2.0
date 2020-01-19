const express = require("express");
const logger = require("morgan");

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));

// Prettify JSON Output
app.set("json spaces", 2);

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Require our routes into the application
require("./server/routes")(app);

// Setup a default catch-all route.
app.get("*", (_, res) =>
  res.status(400).json({
    message: "Invalid API Call"
  })
);

module.exports = app;
