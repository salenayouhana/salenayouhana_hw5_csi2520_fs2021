const express = require("express");
const ejs = require("ejs");

const app = express()

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ejs middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/my_resume', function(req, res) {
  res.render('../views/my_resume.ejs');
});

app.get('/my_fun_facts', function(req, res) {
  res.render('../views/my_fun_facts.ejs');
});

app.get('/blog', function(req, res) {
  res.render('../views/blog.ejs');
});

app.get('/trivia', function(req, res) {
  res.render('../views/trivia.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));