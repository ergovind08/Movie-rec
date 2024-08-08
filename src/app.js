const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const staticpath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(staticpath));
hbs.registerPartials(partialpath);

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/about", (req, res) => {
  res.render("about.hbs");
});

app.get("/weather", (req, res) => {
  res.status(200).render("weather.hbs");
});

app.get("/projects", (req, res) => {
  res.render("projects.hbs");
});

app.get("*", (req, res) => {
  res.status(404).render("404.hbs", { errorMsg: "ooops! page not found" });
});

// Export the server as a Vercel serverless function
module.exports = app;
