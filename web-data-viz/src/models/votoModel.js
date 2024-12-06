var database = require("../database/config");

function atualizarVoto(fkLiga) {
  var instrucaoSql = `
        UPDATE Votacao
        SET votos = votos + 1
        WHERE fkLiga = ${fkLiga}
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarVotos() {
  var instrucaoSql = `
      SELECT votos, nome FROM Votacao
      JOIN Liga ON fkLiga = idLiga;
      `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  atualizarVoto,
  buscarVotos,
};
