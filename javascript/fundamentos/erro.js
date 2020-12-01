function tratarErroELancar(erro) {
    throw new Error('...')
}

function imprimirNomePrintado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomePrintado(obj)