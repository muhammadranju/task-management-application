const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const middleware = [
  express.json(),
  express.urlencoded({ extended: true }),
  cors({
    origin: ["http://localhost:5173", "https://task-manager-9f8db.web.app"],
    credentials: true,
  }),
  morgan("dev"),
];

module.exports = middleware;
