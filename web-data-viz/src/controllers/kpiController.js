var kpiModel = require("../models/kpiModel");


function exibirQtdLigas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA')
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    kpiModel.exibirQtdLigas()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao exibirQtdLigas os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function exibirQtdVotos(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA')
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    kpiModel.exibirQtdVotos()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao exibirQtdVotos os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function exibirLigaVencedora(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA')
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    kpiModel.exibirLigaVencedora()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao exibirLigaVencedora os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function exibirMediaQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA')
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    kpiModel.exibirMediaQuiz()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao exibirMediaQuiz os dados! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    exibirQtdLigas,
    exibirQtdVotos,
    exibirLigaVencedora,
    exibirMediaQuiz
}