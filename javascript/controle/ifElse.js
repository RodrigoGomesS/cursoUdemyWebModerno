const imprimiResultado = function(nota){
    if (nota >= 7) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}

imprimiResultado(9);
imprimiResultado(5);
imprimiResultado('Epa!'); // cuidado