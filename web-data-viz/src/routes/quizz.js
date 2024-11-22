var express = require("express");
var router = express.Router();

var quizzController = require("../controllers/quizzController.js");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarPontuacao/:idCadastro", function (req, res) {
    quizzController.cadastrarPontuacao(req, res);
})

router.get("/listar", function (req, res) {
    quizzController.listar(req, res);
})

module.exports = router;