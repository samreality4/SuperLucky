require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "build")));

const pool = mysql.createPool({
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/getregulardata", (req, res) => {
  pool.query(
    "SELECT Numbers,COUNT(*) as count FROM superlottoregular GROUP BY Numbers ORDER BY Numbers ASC;",
    (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.send(rows);
    }
  );
});

app.get("/getmegadata", (req, res) => {
  pool.query(
    "SELECT Numbers,COUNT(*) as count FROM superlottomega GROUP BY Numbers ORDER BY Numbers ASC;",
    (err, rows) => {
      if (err) {
        console.log(err);
      }
      res.send(rows);
    }
  );
});

app.get("/getwinningdata", (req, res) => {
  pool.query("SELECT winnings, Date FROM superlottowinning;", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

app.get("/gettopthreemegadata", (req, res) => {
  pool.query("SELECT Numbers,COUNT(*) as count FROM superlottomega GROUP BY Numbers ORDER BY Numbers DESC LIMT 3", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

app.get("/gettopthreeregulardata", (req, res) => {
  pool.query("SELECT Numbers,COUNT(*) as count FROM superlottomega GROUP BY Numbers ORDER BY Numbers DESC LIMIT 3", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
