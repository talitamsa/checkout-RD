let inputCPF = document.getElementById('cpfUsuario');
let inputCEP = document.getElementById('cepUsuario');
let inputCartao = document.getElementById('numeroCartaoUsuario');
let inputCVV = document.getElementById('codigoDeSeguranca');
let inputCPFTitular = document.getElementById('cpfTitular');
let inputConfirmarSenha = document.getElementById('confirmeSenhaUsuario');
let inputSenha = document.getElementById('senhaUsuario');
let inputEndereco = document.getElementById('enderecoUsuario');
let inputBairro = document.getElementById('bairroUsuario');
let inputCidade = document.getElementById('cidadeUsuario');
let selectEstado = document.getElementById('estadoUsuario');

// validação cpf
inputCPF.addEventListener('keyup', (event) => {


    if (isNaN(inputCPF.value)) {
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 100))
    }

    if (inputCPF.value.length >= 11) {
        inputCPF.value = inputCPF.value.substring(0, 11)
    }
})

// validação cep
inputCEP.addEventListener('keyup', (event) => {


    if (isNaN(inputCEP.value)) {
        inputCEP.value = inputCEP.value.substring(0, (inputCEP.value.length - 100))
    }

    if (inputCEP.value.length >= 8) {
        inputCEP.value = inputCEP.value.substring(0, 8)
        buscarCep(inputCEP.value)    
    }
})

// validação do número do cartão
inputCartao.addEventListener('keyup', (event) => {


    if (isNaN(inputCartao.value)) {
        inputCartao.value = inputCartao.value.substring(0, (inputCartao.value.length - 100))
    }

    if (inputCartao.value.length >= 16) {
        inputCartao.value = inputCartao.value.substring(0, 16)
    }
})

//validação do código de segurança do cartão 
inputCVV.addEventListener('keyup', (event) => {


    if (isNaN(inputCVV.value)) {
        inputCVV.value = inputCVV.value.substring(0, (inputCVV.value.length - 100))
    }

    if (inputCVV.value.length >= 3) {
        inputCVV.value = inputCVV.value.substring(0, 3)
    }
})

//validação do cpf do titular do cartão 
inputCPFTitular.addEventListener('keyup', (event) => {


    if (isNaN(inputCPFTitular.value)) {
        inputCPFTitular.value = inputCPFTitular.value.substring(0, (inputCPFTitular.value.length - 100))
    }

    if (inputCPFTitular.value.length >= 11) {
        inputCPFTitular.value = inputCPFTitular.value.substring(0, 11)
    }
})

//validação confirmar senha
inputConfirmarSenha.addEventListener('keyup', (e) => {
    if (inputConfirmarSenha.value != inputSenha.value) {
        inputConfirmarSenha.setAttribute('class', 'form-control is-invalid')
    } else {
        inputConfirmarSenha.setAttribute('class', 'form-control is-valid')
    }
})

function buscarCep(cep){
    alert("Pesquisando o CEP: "+ cep);
}

// tentando validar CEP

function buscarCep(cep){
    fetch(`http://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(dados =>{
        if(dados.erro){
            return inputCEP.setAttribute('class', 'form-control is-invalid')
        }
        inputCEP.setAttribute('class', 'form-control is-valid')
        inputEndereco.value = dados.logradouro
        inputBairro.value = dados.bairro
        inputCidade.value = dados.localidade 
        selectEstado.value = dados.uf
    })
}

