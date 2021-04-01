function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}

soBoaNoticia(9.2);
soBoaNoticia(6.0);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade...' + valor);
    }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo('Que virei Gold4 no Lol');