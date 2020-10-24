const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
     Olá
     ${nome}!`
console.log(concatenacao, template)

//expressões...

console.log(`1 + 1 = ${1 + 1}`)

// exemplo de uso

const up = texto => texto.toUpperCase()
console.log(`Cuidado... ${up('perigo')}!`)