{
    {
        var sera = 'Será?????'
    }
}
console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()

var numero = 1
{
    var numero = 2 // sobrescreve o primeiro var
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)