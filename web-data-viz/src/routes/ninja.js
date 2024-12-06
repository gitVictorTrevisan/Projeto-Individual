var express = require("express");
var router = express.Router();

var ninjaController = require("../controllers/ninjaController.js");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarChaosEquivalent", function (req, res) {
    ninjaController.cadastrarChaosEquivalent(req, res);
})


module.exports = router;