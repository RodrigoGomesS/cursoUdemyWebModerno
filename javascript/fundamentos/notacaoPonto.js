console.log(Math.ceil(7.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

//notação ponto serve para trazer toda função ou atributo de um obejeto ou função