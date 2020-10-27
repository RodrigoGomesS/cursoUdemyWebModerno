console.log(typeof Object)

class Produto {}
console.log(Produto)

// Exemplo function

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(3) // o segundo número recebe undefined, outra linguagem não executaria.
imprimirSoma(2, 5, 6, 7, 12)// soma os dois primeiros números, ignora os restantes.

//Função com retorno

function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(2)

// armazenando uma função na variável

const somando = function(a, b) {
    console.log(a + b)
}

somando(1,1)

// armazenando uma função arrow em uma variável

const adcao = (a, b) => {
    return a + b
}

console.log(adcao(8, 8))

//  retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(5, 4))

const imprimir = a => console.log(a)
imprimir('Olá mundo!!!')