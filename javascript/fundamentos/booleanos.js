let isAtivo = false
console.log(isAtivo)
console.log(typeof isAtivo)

isAtivo = true
console.log(isAtivo)

// usando número como valor boolean

isAtivo = 1
console.log(!!isAtivo) // ! representa um negação
console.log(!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))