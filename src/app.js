const express = require("express");
const methodOverride = require("method-override");
const path = require("path");

const indexRouter = require("./routes/index");
const postRouter = require("./routes/posts");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

app.use("/", indexRouter);
app.use("/posts", postRouter);

module.exports = app;
