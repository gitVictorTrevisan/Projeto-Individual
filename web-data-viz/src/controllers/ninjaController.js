var ninjaModel = require("../models/ninjaModel");

function cadastrarChaosEquivalent(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idCurrency = req.body.idCurrencyServer;
    var chaosEquivalent = req.body.chaosEquivalentServer;
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA')
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    ninjaModel.cadastrarChaosEquivalent(idCurrency, chaosEquivalent)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao cadastrar os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    cadastrarChaosEquivalent
}