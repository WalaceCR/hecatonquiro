function somar(a, b){
    return a + b;
}

function concatenar(a, b){
    return a + b;
}

function retornarlista(lista, callbackadd){
    for (let index = 0; index < lista.length; index++) {
        callbackadd(lista[index]);
    }
}

module.exports = somar, concatenar, retornarlista;