var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController.js");

router.get("/liga", function (req, res) {
    kpiController.exibirQtdLigas(req, res);
})

router.get("/votos", function (req, res) {
    kpiController.exibirQtdVotos(req, res);
})

router.get("/vencedora", function (req, res) {
    kpiController.exibirLigaVencedora(req, res);
})

router.get("/mediaQuiz", function (req, res) {
    kpiController.exibirMediaQuiz(req, res);
})


module.exports = router;