// novo recurso EC2015/EC6

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 89
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const{endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//destructuring array

const [a] = [10]
console.log([a])

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[,8 ,8], [9,6,8]]
console.log(nota)

// função
function rand({min = 0, max =1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const objeto = { max: 50, min: 40 }
console.log(rand(objeto))

function rand2([min = 0, max =1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) +min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))