const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const contactRouter = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,  "public")));

let submittedData = { name: " ", email: " " };

contactRouter.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page"})
});

contactRouter.post("/contact", (req, res) => {
  submittedData.name = req.body.name;
  submittedData.email = req.body.email;
  res.redirect("/");
});

module.exports = contactRouter;