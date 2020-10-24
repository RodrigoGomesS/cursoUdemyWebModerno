const valores= [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10 // inseri o número 10 no array, no índice 4.
console.log(valores)
console.log(valores.length) // quantos elementos existe dentro array.

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // esvazia o último valor do array, transformando em null
delete valores[0] // deleta um valor do índice determinado
console.log(valores)

console.log(typeof valores)