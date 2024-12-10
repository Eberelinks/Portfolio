const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;

// register view engine
app.set("view engine", "ejs");

//middlewares and static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "node_modules/@fortawesome/fontawesome-free/css")));
app.use("/webfonts", express.static(path.join(__dirname, "node_modules/@fortawesome/fontawesome-free/webfonts")));
 
// new date object
const now = new Date();

//get current time
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

//get the current date
const date = now.getDate();
const month = now.getMonth() + 1;//months are zero-based
const year = now.getFullYear();

//time and date format
const timeString = `${hours}: ${minutes}: ${seconds}`;
const dateString = `${date} / ${month} / ${year}`;

//print the time and date
console.log(`Time: ${timeString}`);
console.log(`Date: ${dateString}`);

let submittedData = { name: " ", email: " " };

//routes
app.get("/(home)?", (req, res) => {
  res.render("home", { title: "Home Page", data: submittedData, time: timeString, date: dateString});
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page", time: timeString, date: dateString});
});

app.post("/contact", (req, res) => {
  submittedData.name = req.body.name;
  submittedData.email = req.body.email;
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page", time: timeString, date: dateString });
});

app.get("/projects", (req, res) => {
  res.render("projects", { title: "Project Page", time: timeString, date: dateString });
});

app.get("/service", (req, res) => {
  res.render("service", { title: "Service Page", time: timeString, date: dateString });
});

app.listen(PORT, () => console.log("Server is running at port", PORT));

module.exports = {
  timeString,
  dateString
};