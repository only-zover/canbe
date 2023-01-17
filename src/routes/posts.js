const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("posts");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

module.exports = router;