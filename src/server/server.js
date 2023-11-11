const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const dataFile = "data.json";

app.get("/api/data", (req, res) => {
  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.post("/api/data", (req, res) => {
  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      const jsonData = JSON.parse(data);
      jsonData.push(req.body);

      fs.writeFile(dataFile, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          res.status(500).json({ error: "Internal Server Error" });
        } else {
          res.json({ message: "Data added successfully" });
        }
      });
    }
  });
});

// Implement PUT and DELETE routes for updating and deleting data

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
