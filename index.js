const express = require("express");
const app = express();
const fs = require("fs");
const port = 8080;

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("./about.html", (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile("./contact-me.html", (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

app.use((req, res) => {
  fs.readFile("./404.html", (err, data) => {
    if (err) throw err;
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
