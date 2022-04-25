const express = require("express");
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabelas");
const port = 3000;
const app = express();

conexao.connect(erro => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Conectado com sucesso!");

    Tabelas.init(conexao);

    app.listen(port, () => {
      console.log(`LAS-API ouvindo na porta: ${port}`);
    });    
  }
});