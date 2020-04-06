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

host:"localhost",
user: process.env.USERNAME,
password: process.env.PASSWORD,
database: "luckynumbers"
});

console.log(process.env.USER);

con.connect((err) => {
    if(err) throw err;
    console.log("Connected!");
})

con.query("SELECT * FROM lottery", (err, rows) => {
    if(err) throw err;

    console.log(rows);
})

app.get("/", (req, res) => {


    
});

app.post("/newdata", (req, res) => {

});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port 5000");
})

