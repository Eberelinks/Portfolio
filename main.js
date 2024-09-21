const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.listen((3000), console.log("listening now"));

// register view engine
app.set("view engine", "ejs");

//middlewares and static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "node_modules/@fortawesome/fontawesome-free/css")));
app.use("/webfonts", express.static(path.join(__dirname, "node_modules/@fortawesome/fontawesome-free/webfonts")));

let submittedData = { name: "", email: ""};

//routes

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page", data: submittedData });
});

app.get("/home", (req, res) => {
  res.render("home", { title: "Home Page", data: submittedData });
});

app.post("/contact", (req, res) => {
  submittedData.name = req.body.name;
  submittedData.email = req.body.email;
  res.redirect("/");
});


app.get("/about", (req, res) => {
  res.render("about", { title: "About Page"});
});

app.get("/projects", (req, res) => {
  res.render("projects", { title: "Project Page"});
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page"});
});

app.get("/service", (req, res) => {
  res.render("service", { title: "Service Page"});
});


