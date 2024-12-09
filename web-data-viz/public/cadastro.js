
function cadastrar() {
  // aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = ipt_nome.value;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var confirmacaoSenhaVar = ipt_confirmar_senha.value;
  var idEmpresaVincular

  // Verificando se há algum campo em branco
  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == ""
  ) {
    cardErro.style.display = "block";
    // mensagem_erro.innerHTML =
    //   "(Mensagem de erro para todos os campos em branco)";

    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
      idEmpresaVincularServer: idEmpresaVincular
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        // mensagem_erro.innerHTML =
        //   "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        setTimeout(() => {
          window.location = "login.html";
        }, "2000");

        limparFormulario();
        finalizarAguardar();
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      finalizarAguardar();
    });

  return false;
}

// Listando empresas cadastradas 
function listar() {
  fetch("/empresas/listar", {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((empresas) => {
        empresas.forEach((empresa) => {
          listaEmpresasCadastradas.push(empresa);

          console.log("listaEmpresasCadastradas")
          console.log(listaEmpresasCadastradas[0].codigo_ativacao)
        });
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function sumirMensagem() {
  cardErro.style.display = "none";
}

function validarCadastro() {
  var nomeVar = ipt_nome.value;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var confirmacaoSenhaVar = ipt_confirmar_senha.value;
  var nomeValido = false
  var emailValido = false
  var confirmacaoSenhaValida = false
  var simbolos = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
  var numeros = "1234567890"
  var possuiCaractereEspecial = false
  var possuiNumeros = false
  var caracteresSenha = false

  // valida o nome
  if (nomeVar.length < 3) {
    document.getElementById('ipt_nome').style.borderColor = '#810000'
    document.getElementById('validacao_nome').innerHTML = 'O nome deve conter ao menos 3 caracteres.'
    nomeValido = false
  } else {
    document.getElementById('ipt_nome').style.borderColor = '#85712f'
    document.getElementById('validacao_nome').innerHTML = ''
    nomeValido = true
  }

  // valida o email

  if (emailVar.includes("@") && (emailVar.endsWith(".com") || emailVar.endsWith(".br"))) {
    document.getElementById('ipt_email').style.borderColor = '#85712f'
    document.getElementById('validacao_email').innerHTML = ''
    emailValido = true
  } else {
    document.getElementById('ipt_email').style.borderColor = '#810000'
    document.getElementById('validacao_email').innerHTML = 'Informe um e-mail valido'
    emailValido = false
  }

  // valida a senha


  if (possuiCaractereEspecial == false || possuiNumeros == false) {

    for (var i = 0; i < senhaVar.length; i++) {
      if (simbolos.includes(senhaVar[i])) {
        possuiCaractereEspecial = true;
      }
    };


    for (var i = 0; i < senhaVar.length; i++) {
      if (numeros.includes(senhaVar[i])) {
        possuiNumeros = true;
      }

    };
  }


  if (possuiCaractereEspecial && possuiNumeros && senhaVar.length >= 8) {
    document.getElementById('ipt_senha').style.borderColor = '#85712f'
    document.getElementById('validacao_senha').innerHTML = ''
    caracteresSenha = true
  } else {
    document.getElementById('validacao_senha').innerHTML = 'A senha deve possuir ao menos um caractere especial e um numero'
    document.getElementById('ipt_senha').style.borderColor = '#810000'

  }


  if (senhaVar.length < 8) {
    document.getElementById('validacao_senha').innerHTML = 'A senha deve possuir ao menos 8 caracteres'
    document.getElementById('ipt_senha').style.borderColor = '#810000'

  }


  // valida se as senhas coincidem

  if (senhaVar != confirmacaoSenhaVar) {
    document.getElementById('confirmar_senha').innerHTML = 'As senhas não coincidem.'
    document.getElementById('ipt_confirmar_senha').style.borderColor = '#810000'
    confirmacaoSenhaValida = false
  } else {
    document.getElementById('confirmar_senha').innerHTML = ''
    document.getElementById('ipt_confirmar_senha').style.borderColor = '#85712f'
    confirmacaoSenhaValida = true
  }


  if (nomeValido && confirmacaoSenhaValida && emailValido && possuiCaractereEspecial && possuiNumeros && caracteresSenha) {
    cadastrar()
  }


  console.log(nomeValido,
    emailValido,
    confirmacaoSenhaValida,
    possuiCaractereEspecial,
    possuiNumeros,
    caracteresSenha
  )
}




