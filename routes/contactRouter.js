const express = require("express");

const contactRouter = express.Router();

contactRouter.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page", time: timeString, date: dateString})
});

module.exports = contactRouter;