const saudacao = 'Opa' //constexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // constexto léxico 2
    return saudacao
}

// Objetos são grupos de pares nome/valor
const cliente = {
    nome: 'Renato',
    idade: 29,
    peso: 90,
    endereco: {
        logradouro: 'Rua java s. cript',
        numero: 6
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)