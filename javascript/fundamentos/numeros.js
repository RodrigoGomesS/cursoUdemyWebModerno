const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // verifica se o valor retornado é inteiro "true or false"
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.817
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())// transforma em String
console.log(media.toString(2)) // transforma em binário
console.log(typeof media) // retorna o tipo do dado

// cuidados com tipos numéricos...

console.log(7 / 0) //Em algumas linguagens pode restorna erro...
console.log("10" / 5) // String dividido por número...
console.log("Show!" * 2)
console.log(0.1 + 0.7)
//console.log(10.toString()) ele não transforma o número, mas transforma a função number