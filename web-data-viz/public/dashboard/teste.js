
import { NinjaAPI } from "poe-api-manager";

const ninjaAPI = new NinjaAPI("Settlers");

let idCurrency

let chaosEquivalent

function cadastrarChaosEquivalent() {

  ninjaAPI.currencyView.currency.getData(["id", "name", "icon", "chaosEquivalent"]).then((data) => {
    const index = 16;
    data.forEach((element, i) => {
      if (i === index) {
        idCurrency = element.id
        chaosEquivalent = element.chaosEquivalent
        console.log(idCurrency);
        console.log(chaosEquivalent);
      }
    });
  });
  fetch(`/ninja/cadastrarChaosEquivalent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      idServer: idCurrency,
      chaosEquivalentServer: chaosEquivalent

    })

  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Inserção de pontuação realizada com sucesso!"
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
    });
}
