const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/routes/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/routes/about.html");
});
app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/public/routes/contact-me.html");
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/routes/404.html");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
