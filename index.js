const connStr = "Server=baserelay.database.windows.net;Database=Project Aria;User Id=castrom13;Password=5398Samanco@; Encrypt=true";
const sql = require("mssql");
var _ = require('lodash');
var express = require("express");

var app = express();


app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use(express.json())

app.get("/players", (req, res, next) => {
    sql.connect(connStr)
       .then(async function retorno(conn) {
           const result = await sql.query`SELECT * FROM Players`;
           res.json(result);
        })
       .catch(err => console.log("erro! " + err));
});         

app.post("/players", (req, res, next) => {
    const value = req.body;
    if (value !== "") {
        sql.connect(connStr)
           .then(async function retorno(conn) {
               const result = await sql.query`INSERT INTO players(Player_Name) VALUES(${value.Player_Name})`;
               res.json(result);
            })
           .catch(err => console.log("Erro! " + err));
    } else {
        res.json({result: "Erro! A Inserção não pode estar vazia."});
    }
});