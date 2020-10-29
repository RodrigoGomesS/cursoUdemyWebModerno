var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora = ', numero)

//usando let em loop

for(let i = 0; i < 5; i++){
    console.log(i)
}

const funcs = []

for(let x = 0; x < 10; x++) {
    funcs.push(function() {
        console.log(x)
    })
}

funcs[2]()
funcs[8]()

console.log(funcs)
