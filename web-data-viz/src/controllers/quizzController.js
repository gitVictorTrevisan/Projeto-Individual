var quizzModel = require("../models/quizzModel");

function cadastrarPontuacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.pontuacaoFinalServer;
    var idCadastro = req.params.idCadastro;
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA')
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    quizzModel.cadastrarPontuacao(acertos, idCadastro)
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
function listar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA')
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    quizzModel.listar()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao listar os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrarPontuacao,
    listar
}