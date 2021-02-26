const connStr = "Server=baserelay.database.windows.net;Database=Project Aria;User Id=castrom13;Password=5398Samanco@; Encrypt=true";
const sql = require("mssql");
var express = require("express");

var app = express();

app.listen(process.env.PORT || 3000, process.env.YOUR_HOST || "0.0.0.0", () => {
  console.log("Server running on port ", process.env.PORT || 3000);
});

app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("<div>Sucesso!</div>")
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

app.post("/login", (req, res, next) => {
    const value = req.body;
    sql
      .connect(connStr)
      .then(async function retorno(conn) {
        const result = await sql.query`SELECT * FROM fn_login(${value.Username}, ${value.Password})`;
        res.json(result);
      })
      .catch((err) => console.log("erro! " + err));
})
