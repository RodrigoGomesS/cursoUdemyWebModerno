const nota = [6.5, 6.7, 6.8, 6.9, 7.1, 7.2];

for(i in nota){
    console.log(i, nota[i]);
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Gomes",
    idade: 28,
    estado: "RJ"
}

for(let atributo in pessoa){
    console.log("atributo = " + pessoa[atributo]);
}
