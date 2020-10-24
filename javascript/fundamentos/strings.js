const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retorna vazio, em outra linguagem retornaria erro.
console.log(escola.charCodeAt(3)) // mostra o valor do char solicitado em relação a tabela ascii.
console.log(escola.substring(1)) // ele ignora os caracteres do número específicado para trás.
console.log(escola.substring(0,4)) // determina o início da impressão e até onde vai imprimir.
console.log(escola.indexOf('3'))
console.log('Escola '.concat(escola).concat("!")) // concatenação de variáveis
console.log('Escola ' + escola + "!") // outra forma de concatenar
console.log(escola.replace(3, 'E')) // substitui um caracter por outro.

console.log('Rodrigo,Renato,Renan,Rayane'.split(',')) // separa a frase, trasformando em um array