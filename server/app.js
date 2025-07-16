require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var interviewsRouter = require("./routes/interviews");
var contactsRouter = require("./routes/contacts");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/interviews", interviewsRouter);
app.use("/api/contacts", contactsRouter);

module.exports = app;
