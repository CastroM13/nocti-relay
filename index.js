const connStr = "Server=baserelay.database.windows.net;Database=Project Aria;User Id=castrom13;Password=5398Samanco@; Encrypt=true";
const sql = require("mssql");
var _ = require("lodash");
var express = require("express");

var app = express();

app.listen(process.env.PORT || 3000, process.env.YOUR_HOST || "0.0.0.0", () => {
  console.log("Server running on port ", process.env.PORT || 3000);
});

app.use(express.json());

app.get("user/:id/characters", (req, res, next) => {
  sql
    .connect(connStr)
    .then(async function retorno(conn) {
      console.log("Passou");
      const result = await sql.query`SELECT * FROM fn_showUserCharacters(${req.params.id})`;
      res.json(result);
    })
    .catch((err) => console.log("erro! " + err));
});

// app.post("/players", (req, res, next) => {
//   const value = req.body;
//   if (value !== "") {
//     sql
//       .connect(connStr)
//       .then(async function retorno(conn) {
//         const result = await sql.query`INSERT INTO players(Player_Name) VALUES(${value.Player_Name})`;
//         res.json(result);
//       })
//       .catch((err) => console.log("Erro! " + err));
//   } else {
//     res.json({ result: "Erro! A Inserção não pode estar vazia." });
//   }
// });
// app.post("/login", (req, res, next) => {
//   const value = req.body;
//   if (value !== "") {
//     sql
//       .connect(connStr)
//       .then(async function retorno(conn) {
//         const result = await sql.query`INSERT INTO players(Player_Name) VALUES(${value.Player_Name})`;
//         res.json(result);
//       })
//       .catch((err) => console.log("Erro! " + err));
//   } else {
//     res.json({ result: "Erro! A Inserção não pode estar vazia." });
//   }
// });
