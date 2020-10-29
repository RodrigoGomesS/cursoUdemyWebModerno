const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar esses tipos de atributos

console.log(prod1)

const prod2 = {
    nome: 'Calça Jeans',
    preco: 69.90
}

console.log(prod2)

//curiosidades sobre Objeto

console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {

}

console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES6
console.log(typeof Produto)
console.log(typeof new Produto())