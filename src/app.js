import express from "express";
import sequelize from "./config/db.js";

const app = express();

//diz para o express que vamos usar json
app.use(express.json());

sequelize
  .sync()
  .then(() => console.log("Tabelas sincronizadas com sucesso"))
  .catch((error) =>
    console.error("Erro ao sincronizar as tabelas do banco", error)
  );

export default app;
