require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'build')));

const con = mysql.createConnection({
  host: "localhost",
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: "luckynumbers",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/getregulardata", (req, res) => {
  con.query(
    "SELECT Numbers,COUNT(*) as count FROM superlottoregular GROUP BY Numbers ORDER BY Numbers ASC;",
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get("/getregulardata", (req, res) => {
  con.query(
    "SELECT * FROM superlottoregular GROUP BY Numbers ORDER BY Numbers ASC;",
    (err, rows) => {
      if (err) throw err;
      res.send(rows);
    }
  );
});

app.get("/getmegadata", (req, res) => {
    con.query(
      "SELECT Numbers,COUNT(*) as count FROM superlottomega GROUP BY Numbers ORDER BY Numbers ASC;",
      (err, rows) => {
        if (err) throw err;
        res.send(rows);
      }
    );
  });

  app.get("/getwinningdata", (req, res) => {
    con.query(
      "SELECT winnings, Date FROM superlottowinning;",
      (err, rows) => {
        if (err) throw err;
      res.send(rows);
      }
    );
  })


app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
