const connStr = "Server=baserelay.database.windows.net;Database=Project Aria;User Id=castrom13;Password=5398Samanco@; Encrypt=true";
const sql = require("mssql");
var express = require("express");

var app = express();

app.listen(process.env.PORT || 3000, process.env.YOUR_HOST || "0.0.0.0", () => {
  console.log("Server running on port ", process.env.PORT || 3000);
});

// app.use(express.json());

app.get("/", (req, res, next) => {
  const id = req.params.id;
  sql
    .connect(connStr)
    .then(async function retorno(conn) {
      const result = await sql.query`SELECT * FROM fn_showUserCharacters(${id})`;
      res.json(result);
    })
    .catch((err) => console.log("erro! " + err));
  // res.json("sucesso");
});

app.get("/user/:id/characters", (req, res, next) => {
  const id = req.params.id;
  sql
    .connect(connStr)
    .then(async function retorno(conn) {
      const result = await sql.query`SELECT * FROM fn_showUserCharacters(${id})`;
      res.json(result);
    })
    .catch((err) => console.log("erro! " + err));
});
