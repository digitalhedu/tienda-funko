const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3030;
const start = () => console.log("On http://localhost:3030");
app.listen(port, start);
app.use(express.static(path.resolve(__dirname, "public")));
// /css/archivo.css /images/archivo.ext

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "home.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "login.html"))
);

app.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "views", "register.html"))
);
