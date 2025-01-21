const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const time = require("./display/timeString");
const date = require("./display/dateString")
=======
const timeString = require("./display/timeString");
const dateString = require("./display/dateString");
>>>>>>> another
const app = express();
const portfolioHost = process.env.PORTFOLIO_HOST || "localhost";
const portfolioPort = process.env.PORTFOLIO_PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");

//middlewares and static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "node_modules/@fortawesome/fontawesome-free/css")));
app.use("/webfonts", express.static(path.join(__dirname, "node_modules/@fortawesome/fontawesome-free/webfonts")));
// app.use(detailPassed());
 
<<<<<<< HEAD
//print the time and date
console.log(`Time: ${time() }`);
console.log(`Date: ${date() }`);
=======

//print the time and date
console.log( `Time: ${timeString()}` );
console.log( `Date: ${dateString()}` );
>>>>>>> another

let submittedData = { name: " ", email: " " };

//routes
app.get("/(home)?", (req, res) => {
<<<<<<< HEAD
  res.render("home", { title: "Home Page", data: submittedData, time: time(), date: date() });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page", time: time() , date: date() });
=======
  res.render("home", { title: "Home Page", data: submittedData, time: timeString(), date: dateString() });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page", time: timeString(), date: dateString() });
>>>>>>> another
});

app.post("/contact", (req, res) => {
  submittedData.name = req.body.name;
  submittedData.email = req.body.email;
  res.redirect("/");
});

app.get("/about", (req, res) => {
<<<<<<< HEAD
  res.render("about", { title: "About Page", time: time(), date: date() });
});

app.get("/projects", (req, res) => {
  res.render("projects", { title: "Project Page", time: time(), date: date() });
});

app.get("/service", (req, res) => {
  res.render("service", { title: "Service Page", time: time(), date: date() });
});

app.listen(portfolioPort, () => console.log(`Server is running with ${portfolioHost} on port`, portfolioPort));
=======
  res.render("about", { title: "About Page", time: timeString(), date: dateString() });
});

app.get("/projects", (req, res) => {
  res.render("projects", { title: "Project Page", time: timeString(), date: dateString() });
});

app.get("/service", (req, res) => {
  res.render("service", { title: "Service Page", time: timeString(), date: dateString() });
});

app.listen(portfolioPort, () => console.log(`Server is on ${portfolioHost} running at ${portfolioPort}`));
>>>>>>> another
