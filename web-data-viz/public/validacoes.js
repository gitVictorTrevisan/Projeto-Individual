
// function validarCadastro() {
//     var nomeVar = ipt_nome.value;
//     var emailVar = ipt_email.value;
//     var senhaVar = ipt_senha.value;
//     var confirmacaoSenhaVar = ipt_confirmar_senha.value;
//     var nomeValido = false
//     var emailValido = false
//     var senhaValida = false
//     var confirmacaoSenhaValida = false
//     var simbolos = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
//     var numeros = "1234567890"
//     var possuiCaractereEspecial = false

//     // valida o nome
//     if (nomeVar.length < 3) {
//         document.getElementById('ipt_nome').style.borderColor = '#810000'
//         document.getElementById('validacao_nome').innerHTML = 'O nome deve conter ao menos 3 caracteres.'
//         nomeValido = false
//     } else {
//         document.getElementById('ipt_nome').style.borderColor = '#85712f'
//         document.getElementById('validacao_nome').innerHTML = ''
//         nomeValido = true
//     }

//     // valida o email

//     if (emailVar.includes("@") && (emailVar.endsWith(".com") || emailVar.endsWith(".br"))) {
//         document.getElementById('ipt_email').style.borderColor = '#85712f'
//         document.getElementById('validacao_email').innerHTML = ''
//         emailValido = true
//     } else {
//         document.getElementById('ipt_email').style.borderColor = '#810000'
//         document.getElementById('validacao_email').innerHTML = 'Informe um e-mail valido'
//         emailValido = false
//     }

//     // valida a senha

//     for (var i = 0; i <= senhaVar.length; i++) {
//         if (simbolos.includes(senhaVar[i])) {
//             possuiCaractereEspecial = true;
//         }else{
//             possuiCaractereEspecial = false
//         }
//     };
    
//     for (var i = 0; i <= senhaVar.length; i++) {
//         alert('teste')
//         if (numeros.includes(senhaVar[i])) {
//             possuiNumeros = true;
//         }else{
//             possuiNumeros = true;
//         }
//     };


//     // valida se as senhas coincidem

//     if (senhaVar != confirmacaoSenhaVar) {
//         document.getElementById('confirmar_senha').innerHTML = 'As senhas não coincidem.'
//         document.getElementById('ipt_confirmar_senha').style.borderColor = '#810000'
//         confirmacaoSenhaValida = false
//     } else {
//         document.getElementById('confirmar_senha').innerHTML = ''
//         document.getElementById('ipt_confirmar_senha').style.borderColor = '#85712f'
//         confirmacaoSenhaValida = true
//     }


//     if (nomeValido && confirmacaoSenhaValida && emailValido) {

//     }


//     console.log(nomeValido,
//         emailValido,
//         senhaValida,
//         confirmacaoSenhaValida)

//     console.log(senhaVar.length)
// }